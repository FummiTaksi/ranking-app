const puppeteer = require('puppeteer');
const {
  login,
  uploadKoskenMaljaRanking,
  uploadTikakoskiRanking,
  timeout,
  rankingExists,
} = require('./helper');
const rankingService = require('../../services/rankingService');
const {
  getRankingBody,
  removePositionsAndRankings,
  removeUsers,
  removeUsersAndSeedAdmin,
} = require('../helpers/testHelpers');
const {
  connectToMongoose,
  disconnectFromMongoose,
} = require('../../db/connection');


describe('When user goes to upload page ', () => {
  let browser;
  let page;

  beforeAll(async () => {
    await connectToMongoose();
    await removePositionsAndRankings();
    await removeUsersAndSeedAdmin();
    browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    page = await browser.newPage();
  }, timeout);

  describe('and is signed in', () => {
    beforeAll(async () => {
      await removePositionsAndRankings();
      await page.goto('http://frontend:3000/#/signin');
      await login(page, process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
    }, timeout);

    test(' ranking which is in spring can be created', async () => {
      const koskenMalja = 'Kosken malja GP';
      await uploadKoskenMaljaRanking(page, koskenMalja);
      const exists = await rankingExists(page, koskenMalja);
      expect(exists).toBeTruthy();
    }, timeout);

    test(' ranking which is in fall can be created', async () => {
      const tikakoski = 'Tikakoski GP';
      await uploadTikakoskiRanking(page, tikakoski);
      const exists = await rankingExists(page, tikakoski);
      expect(exists).toBeTruthy();
    }, timeout);
  });

  describe(' and is not signed in', () => {
    beforeAll(async () => {
      await removePositionsAndRankings();
      const body = getRankingBody();
      await rankingService.createRanking(body);
      await page.goto('http://frontend:3000/#/');
      await page.waitForSelector('#logOut');
      await page.click('#logOut');
    }, timeout);

    test(' loading files is not possible', async () => {
      await page.goto('http://frontend:3000/#/upload');
      const textContent = await page.$eval('body', el => el.textContent);
      const includes = textContent.includes('excel');
      expect(includes).toBeFalsy();
    }, timeout);
  });

  afterAll(async () => {
    await browser.close();
    await removeUsers();
    await disconnectFromMongoose();
  }, timeout);
});
