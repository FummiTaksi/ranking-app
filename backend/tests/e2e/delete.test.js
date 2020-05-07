const puppeteer = require('puppeteer');
const User = require('../../models/user');
const seeder = require('../../db/seeds');
const {
  login, timeout,
} = require('./helper');
const rankingService = require('../../services/rankingService');
const {
  getRankingBody,
  removePositionsAndRankings,
} = require('../helpers/testHelpers');
const {
  connectToMongoose,
  disconnectFromMongoose,
} = require('../../db/connection');

describe('deleting of ranking ', () => {
  let browser;
  let page;

  beforeAll(async () => {
    await connectToMongoose();
    await removePositionsAndRankings();
    await User.deleteMany({});
    await seeder.seedAdminToDataBase();
    browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    page = await browser.newPage();
  });

  describe('when signed in', () => {
    beforeAll(async () => {
      await removePositionsAndRankings();
      const body = getRankingBody();
      await rankingService.createRanking(body);
      await page.goto('http://frontend:3000/#/signin');
      await login(page, process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
      await page.goto('http://frontend:3000/#/rankings');
    });
    test('is possible', async () => {
      await page.waitForSelector('#rankingList');
      await page.waitForSelector('.delete');
      await page.click('.delete');
      await page.waitForSelector('#noRankings');
      const textContent = await page.$eval('body', el => el.textContent);
      const includes = textContent.includes('No rankings saved to database yet');
      expect(includes).toBeTruthy();
    }, timeout);
  });

  describe('when not signed in', () => {
    beforeAll(async () => {
      await removePositionsAndRankings();
      const body = getRankingBody();
      await rankingService.createRanking(body);
      await page.goto('http://frontend:3000/#/');
      await page.waitForSelector('#logOut');
      await page.click('#logOut');
    });
    test('is not possible', async () => {
      await page.goto('http://frontend:3000/#/rankings');
      await page.waitForSelector('#rankingList');
      const textContent = await page.$eval('body', el => el.textContent);
      const includes = textContent.includes('Delete');
      expect(includes).toBeFalsy();
    }, timeout);
  });

  afterAll(async () => {
    await browser.close();
    await User.deleteMany({});
    await removePositionsAndRankings({});
    await disconnectFromMongoose();
  });
});
