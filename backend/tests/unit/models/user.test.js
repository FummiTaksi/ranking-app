const bcrypt = require('bcryptjs');
const User = require('../../../models/user');
const {
  connectToMongoose,
  disconnectFromMongoose,
} = require('../../../db/connection');

beforeAll(async () => {
  await connectToMongoose();
});

describe('User', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  const getCorrectUser = async () => {
    const passwordHash = await bcrypt.hash('password', 10);
    return {
      username: 'User1',
      passwordHash,
      admin: true,
    };
  };
  test(' can be created with valid credentials', async () => {
    const userModel = await getCorrectUser();
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
