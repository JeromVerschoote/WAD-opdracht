const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/toggl2_0");

const UsersSchema = mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("user", UsersSchema);

module.exports = { User };
