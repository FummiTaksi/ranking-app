if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

let { PORT, MONGOLAB_URL } = process.env;
if (process.env.NODE_ENV === 'test') {
  console.log('asetan testiportin', process.env.TEST_PORT);
  console.log('envit', process.env);
  PORT = process.env.TEST_PORT;
  MONGOLAB_URL = 'mongodb://database:27017/testDB';
} else if (process.env.NODE_ENV === 'e2etest') {
  PORT = process.env.TEST_PORT;
  MONGOLAB_URL = 'mongodb://database:27017/devDB';
} else {
  MONGOLAB_URL = 'mongodb://database:27017/devDB';
}

module.exports = {
  PORT,
  MONGOLAB_URL,
};
