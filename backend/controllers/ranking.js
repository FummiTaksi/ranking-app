const rankingRouter = require('express').Router();
const fileService = require('../services/fileService');
const rankingService = require('../services/rankingService');
const { requireAdminAccess } = require('../middlewares/middlewares');

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
    response.status(200).send({ ranking });
  } catch (error) {
    response.status(400).json({ message: 'Error while getting ranking' });
  }
});

rankingRouter.post('/new', requireAdminAccess, async (request, response) => {
  try {
    const { body } = request;
    if (!body.rankingName) {
      return response.status(400).json({ error: 'Ranking must have a name!' });
    }
    const json = fileService.convertBase64ToExcel(body.rankingFileBase64);
    const rankingDate = fileService.returnDateObject(body.rankingFileBase64);
    const valid = rankingService.checkIfJsonIsValid(json, rankingDate);
    if (valid) {
      body.rankingDate = rankingDate;
      const ranking = await rankingService.createRanking(body);
      rankingService.addPositionsForRanking(ranking, json);
      return response.status(202).json({ message: 'Ranking was created successfully', ranking });
    }
    console.log('JSON WAS NOT VALID');
    return response.status(400).json({ error: 'File is in wrong format!' });
  } catch (error) {
    console.log('ERROR WHEN CREATING RANKING', error);
    return response.status(400).json(getAccessDeniedMessage());
  }
});

rankingRouter.delete('/:id', requireAdminAccess, async (request, response) => {
  try {
    const deletedRanking = await rankingService.deleteRanking(request.params.id);
    return response.status(200).json({ message: 'Ranking was deleted successfully', deletedRanking });
  } catch (error) {
    console.log('error while deleting ranking', error);
    return response.status(400).json(getAccessDeniedMessage());
  }
});

module.exports = rankingRouter;
