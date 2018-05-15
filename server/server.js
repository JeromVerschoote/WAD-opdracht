const express = require("express");
const bodyParser = require("body-parser");

const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const cors = require("cors");

const typeDefs = require("./schema.gql");
const resolvers = require("./resolvers.js");
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const dbConfig = require("./config/database.js");
const mongoose = require("mongoose");

const { User } = require("./connectors");
const jwt = require("express-jwt");
const { jwtsecret } = require("./config/database.js");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Connected");
  })
  .catch(err => {
    console.log("Error, exiting");
    process.exit();
  });

const app = express();

const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use("/graphql", bodyParser.json(), jwt({ secret: jwtsecret, credentialsRequired: false }),
graphqlExpress(req => ({
  schema,
  context: {
    user: req.user ? User.findById(req.user.id) : Promise.resolve(null)
  }
}))
);
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.json({
    message: "Ok, test"
  });
});

require("./app/routes/project.routes.js")(app);

app.listen(PORT, () => {
  console.log("Server luistert op poort 4000");
});
