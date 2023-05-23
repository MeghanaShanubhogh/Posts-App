**#Posts-Apps**
Simple application uses Nodejs, Swagger with expressJs framework Creating Rest Api's for posting application to add, delete, like, dislike, comment post also supports signin and login.

Config folder - Connection to a mysql local server database Index.js - start of the application where the express will start the server to listen routes folder - has two Rest API's routes which are exposed for every action mentioned above like add post, delete post etc controller folder - routes folder actually calls controller next for request validation service folder - constroller calls service to perform the operation and insert, or update or delete the data in the database#Swagger

**#Swagger**
Swagger is documentation tool used to mention front end developer he format of data to be sent for the request and the response

**#Packages to be installed**
```
$ npm install mysql
$ npm install express
$ npm install body-parser
$ npm install swagger-jsdoc
$ npm install swagger-ui-express
```
