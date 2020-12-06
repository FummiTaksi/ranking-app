const supertest = require('supertest');
const { app, server } = require('../../../index');
const Ranking = require('../../../models/ranking');
const {
  getRatingBase64,
  removePositionsAndRankingsAndPlayers,
  seedRatingExcelToDatabase,
  apiTestTimeout,
  removeUsers,
  removeUsersAndSeedAdmin,
  getRankingModelBody,
  saveNormalUser,
} = require('../../helpers/testHelpers');

const api = supertest(app);

let user;
beforeAll(async () => {
  await removePositionsAndRankingsAndPlayers();
  await removeUsersAndSeedAdmin();
  user = await saveNormalUser();
});

const getCorrectToken = async () => {
  const correctCredentials = {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
  };
  const response = await api.post('/api/login').send(correctCredentials);
  return response.body.token;
};

const getNonAdminToken = async () => {
  const credentials = {
    username: user.username,
    password: 'password',
  };
  const response = await api.post('/api/login').send(credentials);
  return response.body.token;
};

const correctCredentials = () => {
  const base64 = getRatingBase64();
  return {
    rankingFileBase64: base64,
    rankingName: 'Test Cup',
  };
};

const postNewRanking = async (credentials, token) => {
  const rankingResponse = await api
    .post('/api/ranking/new')
    .send(credentials)
    .set('Authorization', `bearer ${token}`);
  return rankingResponse;
};

const createNewRanking = async () => {
  const ranking = new Ranking(getRankingModelBody());
  const saved = await ranking.save();
  return saved;
};

describe('/api/ranking', () => {
  describe('/new', () => {
    describe('with incorrect credentials ', () => {
      describe('user is not admin ', () => {
        let response;
        beforeAll(async () => {
          const token = await getNonAdminToken();
          response = await postNewRanking(correctCredentials(), token);
        });
        test(' status is 401', () => {
          expect(response.status).toEqual(401);
        });
        test(' error message is correct', () => {
          expect(response.body.error).toEqual('You must be signed in admin to create new ranking!');
        });
      });
      describe('body is missing rankingName ', () => {
        let response;
        beforeAll(async () => {
          const missingRankingName = correctCredentials();
          missingRankingName.rankingName = undefined;
          const token = await getCorrectToken();
          response = await postNewRanking(missingRankingName, token);
        });
        test(' status is 400', () => {
          expect(response.status).toEqual(400);
        });
        test(' error message is correct', () => {
          expect(response.body.error).toEqual('Ranking must have a name!');
        });
      });
    });

    describe(' with correct body', () => {
      let response;
      beforeAll(async () => {
        const token = await getCorrectToken();
        response = await postNewRanking(correctCredentials(), token);
      });
      test(' status is 202 ', () => {
        expect(response.status).toEqual(202);
      });
      test(' response contains correct competitionName ', () => {
        expect(response.body.ranking.competitionName).toEqual('Test Cup');
      });
    });
  });

  describe(' GET /', () => {
    let ranking;
    let response;
    let rankings;
    beforeAll(async () => {
      await removePositionsAndRankingsAndPlayers();
      ranking = await createNewRanking();
      response = await api.get('/api/ranking/');
      ({ rankings } = response.body);
    });
    test(' status is 200 ', async () => {
      expect(response.status).toEqual(200);
    }, apiTestTimeout);

    test(' returns correct amount of rankings ', async () => {
      expect(rankings.length).toEqual(1);
    }, apiTestTimeout);

    test(' returns correct type of ranking', async () => {
      expect(rankings[0].competitionName).toEqual(ranking.competitionName);
    }, apiTestTimeout);

    afterAll(async () => {
      await removePositionsAndRankingsAndPlayers();
    });
  });

  describe(' DELETE /:id ', () => {
    let ranking;
    let rankingId;
    beforeAll(async () => {
      await removePositionsAndRankingsAndPlayers();
      ranking = await createNewRanking();
      rankingId = ranking._id;
    });
    describe('returns 401 when', () => {
      test(' user is not admin', async () => {
        const token = await getNonAdminToken();
        await api.delete(`/api/ranking/${rankingId}`).set('Authorization', `bearer ${token}`).expect(401);
      }, apiTestTimeout);
    });
    describe('when given correct credentials', () => {
      test('status is 200 and body contains correct id', async () => {
        const token = await getCorrectToken();
        const deleteResponse = await api.delete(`/api/ranking/${rankingId}`).set('Authorization', `bearer ${token}`).expect(200);
        expect(deleteResponse.body.deletedRanking.competitionName).toBe(ranking.competitionName);
      }, apiTestTimeout);
    });
  });

  describe(' GET /:id ', () => {
    let ranking;
    let rankingId;
    beforeAll(async () => {
      await removePositionsAndRankingsAndPlayers();
      ranking = await seedRatingExcelToDatabase();
      rankingId = ranking._id;
    });
    describe('returns 400 when', () => {
      test(' ranking is not found', async () => {
        const token = await getCorrectToken();
        await postNewRanking(correctCredentials(), token);
        await api.get('/api/ranking/wrongId').expect(400);
      }, apiTestTimeout);
    });
    describe('when given correct credentials ', () => {
      let response;
      beforeAll(async () => {
        response = await api.get(`/api/ranking/${rankingId}`);
      });
      test('status is 200', () => {
        expect(response.status).toBe(200);
      });
      test('competitionName is correct', () => {
        expect(response.body.ranking.competitionName).toBe(ranking.competitionName);
      });
    });
  });
});


afterAll(async () => {
  await removePositionsAndRankingsAndPlayers();
  await removeUsers();
  server.close();
});
