const { NODE_ENV, REACT_APP_BACKEND_URL } = process.env;

const BACKEND_URL = NODE_ENV === 'production' ? REACT_APP_BACKEND_URL : '/api';

module.exports = {
  BACKEND_URL,
};
