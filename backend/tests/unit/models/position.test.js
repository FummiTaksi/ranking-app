const Position = require('../../../models/position');
const Ranking = require('../../../models/ranking');
const Player = require('../../../models/player');
const {
  getPositionModelBody,
  getRankingModelBody,
  getPlayerModelBody,
  removePositionsAndRankingsAndPlayers,
} = require('../../helpers/testHelpers');

const {
  connectToMongoose,
  disconnectFromMongoose,
} = require('../../../db/connection');

beforeAll(async () => {
  await connectToMongoose();
});

describe('Position', () => {
  beforeEach(async () => {
    await removePositionsAndRankingsAndPlayers();
  });

  test(' can be created with valid credentials', async () => {
    const positionModel = getPositionModelBody();
    const position = new Position(positionModel);
    await position.save();
    const allPositions = await Position.find({});
    expect(allPositions.length).toBe(1);
  });

  test(' belongs to Ranking', async () => {
    const rankingModel = getRankingModelBody();
    const ranking = new Ranking(rankingModel);
    const rankingSaveResponse = await ranking.save();
    const positionModel = getPositionModelBody(rankingSaveResponse._id);
    const position = new Position(positionModel);
    const positionSaveResponse = await position.save();
    expect(positionSaveResponse.ranking).toBe(rankingSaveResponse._id);
    const positionWithPopulatedRanking = await Position.findById(positionSaveResponse._id)
      .populate('ranking', { competitionName: 1 });
    const { competitionName } = positionWithPopulatedRanking.ranking;
    expect(competitionName).toEqual(rankingModel.competitionName);
  });

  test(' has one Player', async () => {
    const playerModel = getPlayerModelBody();
    const player = new Player(playerModel);
    const playerSaveResponse = await player.save();
    const positionModel = getPositionModelBody(undefined, playerSaveResponse._id);
    const position = new Position(positionModel);
    const positionSaveResponse = await position.save();
    expect(positionSaveResponse.player).toBe(playerSaveResponse._id);
    const positionWithPopulatedPlayer = await Position.findById(positionSaveResponse._id)
      .populate('player', { name: 1 });
    const { name } = positionWithPopulatedPlayer.player;
    expect(name).toEqual(playerModel.name);
  });
});

afterAll(async () => {
  await removePositionsAndRankingsAndPlayers();
  await disconnectFromMongoose();
});
