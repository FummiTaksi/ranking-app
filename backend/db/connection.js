const mongoose = require('mongoose');
const config = require('../utils/config');

const connectToMongoose = async () => {
  console.log('CONNECTING to ', config.MONGOLAB_URL);
  await mongoose.connect(config.MONGOLAB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  mongoose.Promise = global.Promise;
};

const disconnectFromMongoose = async () => {
  await mongoose.connection.close();
};

module.exports = {
  connectToMongoose,
  disconnectFromMongoose,
};
