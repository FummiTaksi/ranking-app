const puppeteer = require('puppeteer');
const { timeout } = require('./helper');

describe('When user visits about page ', () => {
  test(' it contains welcome message', async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('http://frontend:3000/#/about');
    await page.waitForSelector('#aboutPage');
    const textContent = await page.$eval('body', el => el.textContent);
    const includes = textContent.includes('Welcome to Ranking-app!');
    expect(includes).toBe(true);
    await browser.close();
  }, timeout);
});
