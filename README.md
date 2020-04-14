# HOW TO RUN

```
docker-compose up
```

Application opens in localhost:3001

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


## HOW TO RUN TESTS

```
docker exec -it rankingapp-backend npm run test:unit
```
