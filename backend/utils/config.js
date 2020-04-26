if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

let { PORT, MONGOLAB_URL } = process.env;
const { NODE_ENV } = process.env;
if (NODE_ENV === 'test') {
  console.log('TEST ENVIRONMENT: Setting port to', process.env.TEST_PORT);
  PORT = process.env.TEST_PORT;
  MONGOLAB_URL = 'mongodb://database:27017/testDB';
} else if (NODE_ENV === 'e2etest') {
  PORT = process.env.TEST_PORT;
  MONGOLAB_URL = 'mongodb://database:27017/devDB';
  console.log('In e2etest env, defining test port to', PORT);
  console.log('connecting mongoDB to ', MONGOLAB_URL);
} else if (!process.env.MONGOLAB_URL) {
  console.log('DEV ENVIRONMENT, setting MONGOLABURL to devDB');
  MONGOLAB_URL = 'mongodb://database:27017/devDB';
}

module.exports = {
  PORT,
  MONGOLAB_URL,
};
