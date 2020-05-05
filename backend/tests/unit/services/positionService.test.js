const Position = require('../../../models/position');
const rankingService = require('../../../services/rankingService');
const positionService = require('../../../services/positionService');
const {
  getRankingBody,
  getPositionModelBody,
  connectToMongoose,
  disconnectFromMongoose,
  removePositionsAndRankings,
} = require('../../helpers/testHelpers');

beforeAll(async () => {
  await connectToMongoose();
  await removePositionsAndRankings();
});

describe('rankingService ', () => {
  describe(' createPosition ', () => {
    test(' creates position which has ranking attached to it', async () => {
      const rankingBody = getRankingBody();
      const rankingSaveResponse = await rankingService.createRanking(rankingBody);
      const positionBody = getPositionModelBody(rankingSaveResponse._id);
      await positionService.createPosition(positionBody);
      const allPositions = await Position.find({});
      expect(allPositions.length).toBe(1);
      const savedPosition = allPositions[0];
      expect(savedPosition.playerName).toEqual(positionBody.playerName);
      expect(savedPosition.ranking).toEqual(rankingSaveResponse._id);
    });
  });
});

afterAll(async () => {
  await removePositionsAndRankings();
  await disconnectFromMongoose();
});
