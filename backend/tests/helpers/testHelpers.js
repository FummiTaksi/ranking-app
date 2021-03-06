const fs = require('fs');
const bcrypt = require('bcryptjs');
const Position = require('../../models/position');
const Ranking = require('../../models/ranking');
const Player = require('../../models/player');
const User = require('../../models/user');
const fileService = require('../../services/fileService');
const rankingService = require('../../services/rankingService');
const seeder = require('../../db/seeds');

const getPositionModelBody = (rankingId, playerId) => {
  const positionBody = {
    clubName: 'TOP CLUB',
    playerName: 'Testi Testaaja',
    rating: 1421,
    position: 120,
    date: new Date(2018, 5, 15),
    ranking: rankingId,
    player: playerId,
  };
  return positionBody;
};

const getRankingModelBody = () => ({
  date: new Date(2018, 5, 15),
  competitionName: 'Test Competition',
});

const getPlayerModelBody = () => ({
  name: 'Testi Testinen',
});

const getRankingBody = () => {
  const rankingBody = {
    rankingDate: new Date(2018, 5, 15),
    rankingName: 'Test Rank',
  };
  return rankingBody;
};

const getRatingBase64 = () => {
  const result = fs.readFileSync('./tests/helpers/rating-files/spring/TestRatingFile.txt', 'utf8');
  return result;
};

const getKoskiBase64 = () => {
  const result = fs.readFileSync('./tests/helpers/rating-files/spring/Koski.txt', 'utf8');
  return result;
};

const getAdminUser = async () => {
  const passwordHash = await bcrypt.hash('password', 10);
  return {
    username: 'Admin1',
    passwordHash,
    admin: true,
  };
};

const getNormalUser = async () => {
  const passwordHash = await bcrypt.hash('password', 10);
  return {
    username: 'Normal1',
    passwordHash,
    admin: false,
  };
};

const saveNormalUser = async () => {
  const userModel = await getNormalUser();
  const user = new User(userModel);
  return user.save();
};

const removePositionsAndRankings = async () => {
  await Position.deleteMany({});
  await Ranking.deleteMany({});
};

const removePositionsAndRankingsAndPlayers = async () => {
  await removePositionsAndRankings();
  await Player.deleteMany({});
};

const removeUsers = async () => {
  await User.deleteMany({});
};

const removeUsersAndSeedAdmin = async () => {
  await removeUsers();
  await seeder.seedAdminToDataBase();
};


const seedRatingExcelToDatabase = async () => {
  const base64 = getRatingBase64();
  const fileJson = fileService.convertBase64ToExcel(base64);
  const rankingDate = fileService.returnDateObject(base64);
  const body = {
    rankingName: 'Kosken Malja 2019',
    rankingDate,
  };
  const ranking = await rankingService.createRanking(body);
  await rankingService.addPositionsForRanking(ranking, fileJson);
  return ranking;
};

const apiTestTimeout = 10000;

module.exports = {
  getPositionModelBody,
  getRankingBody,
  getRankingModelBody,
  getRatingBase64,
  getKoskiBase64,
  getAdminUser,
  getNormalUser,
  saveNormalUser,
  removePositionsAndRankings,
  removePositionsAndRankingsAndPlayers,
  removeUsers,
  removeUsersAndSeedAdmin,
  getPlayerModelBody,
  seedRatingExcelToDatabase,
  apiTestTimeout,
};
