const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
      info: {
        title: "my-posts",
        description: "API documentation",
        contact: {
          name: "Developer",
        },
        servers: ["http://localhost:3000/"],
      },
    }),
    apis: ["index.js", "./routes/*.js"],
  };
  
  const swaggerDocs = swaggerJsdoc(swaggerOption);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  /** Swagger Initialization - END */

app.use(bodyParser.json());

const usersRoutes = require("./routes/users.route");
app.use("/users", usersRoutes);

const postsRoutes = require("./routes/posts.route");
app.use("/posts", postsRoutes);

app.listen(3000, ()=>{
    console.log("I am listening to it");
});

