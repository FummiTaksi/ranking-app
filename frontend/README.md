Ranking-app frontend
[![Build Status](https://travis-ci.org/FummiTaksi/ranking-app-frontend.svg?branch=master)](https://travis-ci.org/FummiTaksi/ranking-app-frontend)

[![Coverage Status](https://coveralls.io/repos/github/FummiTaksi/ranking-app-frontend/badge.svg?branch=master)](https://coveralls.io/github/FummiTaksi/ranking-app-frontend?branch=master)

[Backend](https://github.com/FummiTaksi/ranking-app-backend)


# HOW TO DEVELOP

Prerequisities: DOCKER

## RUN LOCALLY

From the root of the repository

```
docker build . --tag rankingapp-frontend
docker run -p 3000:3000 -i rankingapp-frontend

```

## RUN TESTS

From the root of the repository

```
npm test
```