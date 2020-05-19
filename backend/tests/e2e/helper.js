/* eslint-disable no-await-in-loop */
const login = async (page, username, password) => {
  await page.type('input', username);
  await page.type('input[type=password]', password);
  await page.click('button');
};
const timeout = 60000;

const uploadRanking = async (page, filePath, rankingName) => {
  await page.goto('http://frontend:3000/#/upload');
  await page.waitForSelector('#fileDrop');
  const fileEle = await page.$('input[type="file"]');
  await fileEle.uploadFile(filePath);
  await page.waitForSelector('form');
  await page.type('input[name=rankingName]', rankingName);
  await page.waitForSelector('button[type=submit]');
  await page.click('button[type=submit]');
  await page.waitForSelector('#rankingFormComplete');
};
const uploadKoskenMaljaRanking = async (page, rankingName) => {
  await uploadRanking(page, './tests/helpers/rating-files/spring/3321_Kosken_Malja_GP_su.xls', rankingName);
};

const uploadTikakoskiRanking = async (page, rankingName) => {
  await uploadRanking(page, './tests/helpers/rating-files/fall/3282_Tikakoski_GP_su.xls', rankingName);
};

const rankingExists = async (page, rankingId) => {
  let completed = false;
  await page.goto(`http://frontend:3000/#/rankings/${rankingId}`);
  while (!completed) {
    await page.reload({ options: { waitUntil: 'networkidle2' } });
    await page.waitForSelector('#adminPanel');
    const content = await page.$eval('body', el => el.textContent);
    completed = content.includes('Uploading complete');
  }
  await page.waitForSelector('#completed');
  const textContent = await page.$eval('body', el => el.textContent);
  return textContent.includes('Uploading complete');
};

module.exports = {
  login, uploadKoskenMaljaRanking, uploadTikakoskiRanking, timeout, rankingExists,
};
