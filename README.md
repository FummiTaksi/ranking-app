# RANKING-APP

Purpose of this website is to offer long term statisctics
for table tennis players who play in Finland.
    
[Check the production here](https://tt-ranks-fin.herokuapp.com/#/)

Developed in co-operation with [Finnish table tennis association](http://www.sptl.fi/sptl_uudet/)

![Continuous deployment pipeline](https://github.com/FummiTaksi/ranking-app/workflows/Continuous%20deployment%20pipeline/badge.svg)



## HOW TO RUN

Prerequisities: [Docker](https://docs.docker.com/get-docker/)

Run the following in the root of this repository

```
docker-compose up
```

Application opens in localhost:3000


## HOW TO RUN TESTS

The following commands will work when the containers are running.

### BACKEND UNIT TESTS

Requires database and backend containers running. 

```
docker exec rankingapp-backend npm run test:unit
```

RUN TESTS IN SINGLE FILE:

```
docker exec rankingapp-backend ./node_modules/.bin/jest --verbose --runInBand --forceExit --coverage tests/unit/services/rankingService.test.js
```

### FRONTEND UNIT TESTS

Requires frontend container running

```
docker exec rankingapp-frontend npm run test
```


### END TO END TESTS

RUN ALL TESTS:

```
docker exec rankingapp-backend npm run test:e2e
```

RUN TESTS IN SINGLE FILE:

```
docker exec rankingapp-backend ./node_modules/.bin/jest --runInBand --forceExit ./tests/e2e/aboutpage.test.js
```


## HOW TO CONNECT TO DATABASE


````
docker exec -it rankingapp-database mongo
connect("mongodb://database:27017")
use devDB
````

now you can query the db, for example

```
show collections
db.users.find()
```

to see that the admin is seeded correctly

## LINTING

To check code formatting, for backend
````
docker exec rankingapp-backend npm run lint
````
and frontend
````
docker exec rankingapp-frontend npm run lint
````


## AUDIT

To find vulnerabilties, for backend
````
docker exec rankingapp-backend npm audit
````
and frontend
````
docker exec rankingapp-frontend npm audit
````


### PRODUCTION

To run the production version, run following with correct .env file


```
docker-compose -f docker-compose.production.yml up
```