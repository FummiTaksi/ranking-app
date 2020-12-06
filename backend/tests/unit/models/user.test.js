const User = require('../../../models/user');
const {
  connectToMongoose,
  disconnectFromMongoose,
} = require('../../../db/connection');
const {
  getAdminUser,
} = require('../../helpers/testHelpers');

beforeAll(async () => {
  await connectToMongoose();
});

describe('User', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  test(' can be created with valid credentials', async () => {
    const userModel = await getAdminUser();
    const user = new User(userModel);
    await user.save();
    const allUsers = await User.find({});
    expect(allUsers.length).toBe(1);
  });
});

afterAll(async () => {
  await User.deleteMany({});
  await disconnectFromMongoose();
});
