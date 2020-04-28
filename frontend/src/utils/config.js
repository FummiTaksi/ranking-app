console.log('process.env', process.env);


const BACKEND_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:3001/api' : '/api'

module.exports = {
 BACKEND_URL
}