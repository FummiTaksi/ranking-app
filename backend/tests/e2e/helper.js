const login = async (page, username, password) => {
  await page.type('input', username);
  await page.type('input[type=password]', password);
  await page.click('button');
};
const timeout = 200000;

const uploadRanking = async (page, filePath, rankingName) => {
  await page.goto('http://frontend:3000/#/upload');
  await page.waitForSelector('.success', { hidden: true }, timeout);
  await page.waitForSelector('#fileDrop');
  const fileEle = await page.$('input[type="file"]');
  await fileEle.uploadFile(filePath);
  await page.waitForSelector('form');
  await page.type('input[name=rankingName]', rankingName);
  await page.waitForSelector('button[type=submit]');
  await page.click('button[type=submit]');
  await page.waitForSelector('.success', timeout);
};
const uploadKoskenMaljaRanking = async (page, rankingName) => {
  await uploadRanking(page, './tests/helpers/rating-files/spring/3321_Kosken_Malja_GP_su.xls', rankingName);
};

const uploadTikakoskiRanking = async (page, rankingName) => {
  await uploadRanking(page, './tests/helpers/rating-files/fall/3282_Tikakoski_GP_su.xls', rankingName);
};

const rankingExists = async (page, rankingName) => {
  await page.goto('http://frontend:3000/#/rankings');
  await page.waitForSelector('#rankingList');
  const textContent = await page.$eval('body', el => el.textContent);
  return textContent.includes(rankingName);
};

module.exports = {
  login, uploadKoskenMaljaRanking, uploadTikakoskiRanking, timeout, rankingExists,
};
