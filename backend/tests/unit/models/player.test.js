const Position = require('../../../models/position');
const Player = require('../../../models/player');
const {
  getPositionModelBody,
  getPlayerModelBody,
} = require('../../helpers/testHelpers');

const {
  connectToMongoose,
  disconnectFromMongoose,
} = require('../../../db/connection');

beforeAll(async () => {
  await connectToMongoose();
});

describe('Player ', () => {
  beforeEach(async () => {
    await Player.deleteMany({});
    await Position.deleteMany({});
  });

  const playerModel = getPlayerModelBody();

  test(' can be created when given name', async () => {
    const player = new Player(playerModel);
    await player.save();
    const allPlayers = await Player.find({});
    expect(allPlayers.length).toBe(1);
    expect(allPlayers[0].name).toEqual(playerModel.name);
  });

  test(' has positions', async () => {
    const positionModel = getPositionModelBody();
    const position = new Position(positionModel);
    const positionSaveResponse = await position.save();
    playerModel.positions = [positionSaveResponse];
    const player = new Player(playerModel);
    const playerSaveResponse = await player.save();
    expect(playerSaveResponse.positions.length).toBe(1);
    const playerWithPopulatedPositions = await Player.findById(playerSaveResponse._id)
      .populate('positions', {
        position: 1, rating: 1, playerName: 1, clubName: 1,
      });
    expect(playerWithPopulatedPositions.positions[0].position).toEqual(positionModel.position);
    expect(playerWithPopulatedPositions.positions[0].clubName).toEqual(positionModel.clubName);
  });
});

afterAll(async () => {
  await Player.deleteMany({});
  await Position.deleteMany({});
  await disconnectFromMongoose();
});
