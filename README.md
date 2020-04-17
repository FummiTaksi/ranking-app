# RANKING-APP

Purpose of this website is to offer long term statisctics
for table tennis players who play in Finland.

Developed in co-operation with [Finnish table tennis association](http://www.sptl.fi/sptl_uudet/)



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
docker exec -it rankingapp-backend npm run test:unit
```

### FRONTEND UNIT TESTS

Requires frontend container running

```
docker exec -it rankingapp-frontend npm run test
```


### END TO END TESTS

RUN ALL TESTS:

```
docker exec -it rankingapp-backend npm run test:e2e
```

RUN SINGLE TEST:

```
docker exec -it rankingapp-backend ./node_modules/.bin/jest --runInBand --forceExit ./tests/e2e/aboutpage.test.js
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
