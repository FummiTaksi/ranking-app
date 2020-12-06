const jwt = require('jsonwebtoken');
const User = require('../models/user');

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7);
  }
  next();
};

const requireAdminAccess = async (request, response, next) => {
  const accessDeniedMessage = { error: 'You must be signed in admin to create new ranking!' };
  try {
    const { token } = request;
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json(accessDeniedMessage);
    }
    const userWhoAddedRanking = await User.findById(decodedToken.id);
    if (!userWhoAddedRanking.admin) {
      return response.status(401).json(accessDeniedMessage);
    }
    next();
  } catch (error) {
    return response.status(400).json(accessDeniedMessage);
  }
  return null;
};

module.exports = { tokenExtractor, requireAdminAccess };
