const { User } = require("./connectors");

// onbekende bestandstypes aanmaken bvb. Date, Address, ...

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
    }
  }
};
