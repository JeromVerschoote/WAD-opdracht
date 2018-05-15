const { User } = require("./connectors");
const { GraphQLScalarType, GraphQLError } = require("graphql");
const { Kind } = require("graphql/language");
const jwt = require("jsonwebtoken");
const { jwtsecret } = require("./config/database.js");

const validateValue = value => {
  if (isNaN(Date.parse(value)))
    throw new GraphQLError(`Query error: not a valid date`, [value]);
};

function getAuthenticatedUser(context) {
  return context.user.then(user => {
    if (!user) {
      return Promise.reject("Unauthorized");
    }
    return user;
  });
}

module.exports = {
  Query: {
    getAllUsers() {
      return User.find();
    }
  },
  Mutation: {
    addUser(_, args) {
      return new User(args).save();
    },
    updateUser(_, args) {
      const { _id } = args;
      return User.findOneAndUpdate({ _id }, args, { new: true });
    },
    deleteUser(_, args) {
      const { _id } = args;
      return User.findByIdAndRemove({ _id });
    },
    login(_, { email, password }, context) {
      console.log("login");
      return User.findOne({ email }).then(user => {
        if (!user || !user.validPassword(password)) {
          return Promise.reject("Invalid username/password");
        } else {
          console.log("login ok");
          const token = jwt.sign(
            {
              id: user._id,
              name: user.name
            },
            jwtsecret
          );
          user.jwt = token;
          context.user = Promise.resolve(user);
          return user;
        }
      });
    },
    register(_, { email, password, name }, context) {
      console.log("register", email, password, name);
      return User.findOne({ email }).then(user => {
        if (!user) {
          return User.create({ email, password, name })
            .then(user => {
              context.user = Promise.resolve(user);
              return user;
            })
            .catch(err => {
              return Promise.reject("Registration errors" + err.message);
            });
        }
        return Promise.reject("Already exists");
      });
    }
  }
};
