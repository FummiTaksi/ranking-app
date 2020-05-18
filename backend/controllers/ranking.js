const jwt = require('jsonwebtoken');
const rankingRouter = require('express').Router();
const User = require('../models/user');
const fileService = require('../services/fileService');
const rankingService = require('../services/rankingService');

const getAccessDeniedMessage = () => ({ error: 'You must be signed in admin to create new ranking!' });

rankingRouter.get('/', async (request, response) => {
  try {
    const rankings = await rankingService.getRankings();
    response.status(200).send({ rankings });
  } catch (error) {
    console.log('ERROR WHEN GETTING RANKINGS', error);
    response.status(400).json({ message: 'Error while retrieving rankings' });
  }
});

rankingRouter.get('/:id', async (request, response) => {
  try {
    const ranking = await rankingService.getRanking(request.params.id);
    const percent = ranking.positions.length / ranking.amountOfLines;
    response.status(200).send({ ranking, percent });
  } catch (error) {
    response.status(400).json({ message: 'Error while getting ranking' });
  }
});

rankingRouter.post('/new', async (request, response) => {
  try {
    const { token, body } = request;
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json(getAccessDeniedMessage());
    }
    const userWhoAddedRanking = await User.findById(decodedToken.id);
    if (!userWhoAddedRanking.admin) {
      return response.status(401).json(getAccessDeniedMessage());
    }
    if (!body.rankingName) {
      return response.status(400).json({ error: 'Ranking must have a name!' });
    }
    const json = fileService.convertBase64ToExcel(body.rankingFileBase64);
    const rankingDate = fileService.returnDateObject(body.rankingFileBase64);
    const object = rankingService.checkIfJsonIsValid(json, rankingDate);
    if (object.fileEnds) {
      body.rankingDate = rankingDate;
      body.amountOfLines = object.index;
      const ranking = await rankingService.createRanking(body);
      rankingService.addPositionsForRanking(ranking, json);
      return response.status(202).json({ message: 'Ranking was created successfully', ranking });
    }
    return response.status(400).json({ error: 'File is in wrong format!' });
  } catch (error) {
    console.log('ERROR WHEN CREATING RANKING', error);
    return response.status(400).json(getAccessDeniedMessage());
  }
});

rankingRouter.delete('/:id', async (request, response) => {
  try {
    const { token } = request;
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json(getAccessDeniedMessage());
    }
    const userWhoAddedRanking = await User.findById(decodedToken.id);
    if (!userWhoAddedRanking.admin) {
      return response.status(401).json(getAccessDeniedMessage());
    }
    const deletedRanking = await rankingService.deleteRanking(request.params.id);
    return response.status(200).json({ message: 'Ranking was deleted successfully', deletedRanking });
  } catch (error) {
    console.log('error while deleting ranking', error);
    return response.status(400).json(getAccessDeniedMessage());
  }
});

module.exports = rankingRouter;
