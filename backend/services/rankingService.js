const Ranking = require('../models/ranking');
const playerService = require('./playerService');
const positionService = require('./positionService');
const dateService = require('./dateService');

const convertColumnToRankingObject = (column, nameString) => {
  const positionString = '__EMPTY';
  const clubString = '__EMPTY_3';
  const ratingString = '__EMPTY_4';
  return {
    playerName: column[nameString],
    position: column[positionString],
    clubName: column[clubString],
    rating: column[ratingString],
  };
};

const createRanking = async (rankingBody) => {
  const rankingModel = {
    competitionName: rankingBody.rankingName,
    date: rankingBody.rankingDate,
    amountOflines: rankingBody.amountOflines,
  };
  const ranking = new Ranking(rankingModel);
  const response = await ranking.save();
  return response;
};

const getRanking = async (rankingId) => {
  const ranking = await Ranking.findById(rankingId).populate('positions', {
    position: 1, rating: 1, playerName: 1, clubName: 1,
  });
  return ranking;
};

const deleteRanking = async (rankingId) => {
  const ranking = await getRanking(rankingId);
  const removed = await ranking.deleteOne();
  return removed;
};

const returnPositionList = async (rankingJson, rankingId, date) => {
  const stringObject = dateService.returnDateStringAndNoMorePlayers(date);
  const { nameString, noMorePlayers } = stringObject;
  let allPlayersSaved = false;
  return rankingJson.reduce(async (positionListPromise, element, index) => {
    const positionList = await positionListPromise;
    if (index > 1 && !allPlayersSaved) {
      if (element[nameString] === noMorePlayers) {
        allPlayersSaved = true;
        return positionList;
      }
      const positionBody = convertColumnToRankingObject(element, nameString);
      positionBody.ranking = rankingId;
      positionBody.date = date;
      const savedPosition = await positionService.createPosition(positionBody);
      await playerService.createPlayer(savedPosition);
      positionList.push(savedPosition._id);
    }
    return positionList;
  }, Promise.resolve([]));
};

const addPositionsForRanking = async (createdRanking, rankingJson) => {
  const ranking = createdRanking;
  const positions = await returnPositionList(rankingJson, ranking._id, ranking.date);
  ranking.positions = positions;
  ranking.completed = true;
  const updatedRanking = await Ranking.findByIdAndUpdate(ranking._id, ranking);
  return updatedRanking;
};

const checkIfJsonIsValid = (rankingJson, date) => {
  const stringObject = dateService.returnDateStringAndNoMorePlayers(date);
  const { nameString, noMorePlayers } = stringObject;
  let fileEnds = false;
  let index = 0;
  for (index = 0; index < rankingJson.length; index += 1) {
    if (rankingJson[index][nameString] === noMorePlayers) {
      fileEnds = true;
    }
  }
  return {
    fileEnds,
    index,
  };
};

const getRankings = async () => {
  const allRankings = await Ranking.find({}).populate('positions', {
    position: 1,
    rating: 1,
    playerName: 1,
    clubName: 1,
  });
  return allRankings;
};

module.exports = {
  addPositionsForRanking,
  checkIfJsonIsValid,
  createRanking,
  deleteRanking,
  getRankings,
  getRanking,
};
