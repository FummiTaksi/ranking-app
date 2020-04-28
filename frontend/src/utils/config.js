require('dotenv').config();
  
let { BACKEND_URL } = process.env;

BACKEND_URL = BACKEND_URL ? BACKEND_URL : '/api'

module.exports = {
 BACKEND_URL
}