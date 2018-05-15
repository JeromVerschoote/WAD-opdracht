const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { dburl } = require("./config/database.js");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/toggl2_0");

/*const UsersSchema = mongoose.Schema({
  name: String,
  email: String
});*/

const UserSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true, index: { unique: true } },
  passwordHash: { type: String, required: true }
});

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.virtual("password").set(function(value) {
  this.passwordHash = bcrypt.hashSync(value, 12);
});

const User = mongoose.model("user", UserSchema);

module.exports = { User };
