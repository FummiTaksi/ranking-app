const puppeteer = require('puppeteer');
const { timeout } = require('./helper');
const Player = require('../../models/player');
const {
  removePositionsAndRankingsAndPlayers,
  seedRatingExcelToDatabase,
  removeUsers,
  removeUsersAndSeedAdmin,
} = require('../helpers/testHelpers');
const {
  connectToMongoose,
  disconnectFromMongoose,
} = require('../../db/connection');

describe('When user visits players page ', () => {
  let browser;
  let page;
  beforeAll(async () => {
    await connectToMongoose();
    await removePositionsAndRankingsAndPlayers();
    await removeUsersAndSeedAdmin();
    await seedRatingExcelToDatabase();
    browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    page = await browser.newPage();
  }, timeout);
  test(' it shows correct amount of players', async () => {
    await page.goto('http://frontend:3000/#/');
    await page.waitForSelector('#playerList');
    const textContent = await page.$eval('body', el => el.textContent);
    const includes = textContent.includes('Showing 7 players that matched your search');
    expect(includes).toBe(true);
  }, timeout);
  test('players info is shown correctly', async () => {
    const player = await Player.findOne({});
    const playerId = player._id;
    const { name } = player;
    await page.goto(`http://frontend:3000/#/players/${playerId}`);
    await page.waitForSelector('#playerView');
    const textContent = await page.$eval('body', el => el.textContent);
    const includes = textContent.includes(`Statistics of ${name}`);
    expect(includes).toBe(true);
  }, timeout);

  afterAll(async () => {
    await browser.close();
    await removeUsers();
    await removePositionsAndRankingsAndPlayers();
    await disconnectFromMongoose();
  });
});
