const puppeteer = require('puppeteer');
const { login, timeout } = require('./helper');
const {
  connectToMongoose,
  disconnectFromMongoose,
} = require('../../db/connection');

const {
  removeUsers,
  removeUsersAndSeedAdmin,
} = require('../helpers/testHelpers');

describe('When user goest to login page ', () => {
  let browser;
  let page;
  beforeAll(async () => {
    await connectToMongoose();
    await removeUsersAndSeedAdmin();
    browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    page = await browser.newPage();
  });
  beforeEach(async () => {
    await page.goto('http://frontend:3000/#/signin');
  });
  test(' it tells user signing in is only for admin', async () => {
    const textContent = await page.$eval('body', el => el.textContent);
    const includes = textContent.includes('Signing in is only available for admin!');
    expect(includes).toBe(true);
  }, timeout);

  test(' and fills wrong credentials, login fails', async () => {
    await login(page, process.env.ADMIN_USERNAME, 'wrongPassword');
    await page.waitForSelector('.success');
    const textContent = await page.$eval('body', el => el.textContent);
    const includes = textContent.includes('Wrong username or password!');
    expect(includes).toBe(true);
  }, timeout);

  test(' and fills correct credentials, login succeeds', async () => {
    await login(page, process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
    await page.waitForSelector('#loggedIn');
    const textContent = await page.$eval('body', el => el.textContent);
    const includes = textContent.includes('You are logged in as Admin');
    expect(includes).toBe(true);
  }, timeout);

  afterAll(async () => {
    await browser.close();
    await removeUsers();
    await disconnectFromMongoose();
  });
});
