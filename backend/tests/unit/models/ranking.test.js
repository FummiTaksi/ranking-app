const Ranking = require('../../../models/ranking');
const Position = require('../../../models/position');
const {
  getPositionModelBody,
  getRankingModelBody,
  removePositionsAndRankings,
} = require('../../helpers/testHelpers');
const {
  connectToMongoose,
  disconnectFromMongoose,
} = require('../../../db/connection');

beforeAll(async () => {
  await connectToMongoose();
});

describe('Ranking ', () => {
  beforeEach(async () => {
    await removePositionsAndRankings();
  });

  const rankingModel = getRankingModelBody();

  test(' can be created with valid credentials', async () => {
    const ranking = new Ranking(rankingModel);
    await ranking.save();
    const allRankings = await Ranking.find({});
    expect(allRankings.length).toBe(1);
  });

  test(' has positions', async () => {
    const positionModel = getPositionModelBody();
    const position = new Position(positionModel);
    const positionSaveResponse = await position.save();
    rankingModel.positions = [positionSaveResponse];
    const ranking = new Ranking(rankingModel);
    const rankingSaveResponse = await ranking.save();
    expect(rankingSaveResponse.positions.length).toBe(1);
    const rankingWithPopulatedPositions = await Ranking.findById(rankingSaveResponse._id)
      .populate('positions', {
        position: 1, rating: 1, playerName: 1, clubName: 1,
      });
    expect(rankingWithPopulatedPositions.positions[0].position).toEqual(positionModel.position);
    expect(rankingWithPopulatedPositions.positions[0].clubName).toEqual(positionModel.clubName);
  });
});

afterAll(async () => {
  await removePositionsAndRankings();
  await disconnectFromMongoose();
});
