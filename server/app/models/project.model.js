const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    id: String,
    name: String,
    client: String,
    rate: Number,
    deadline: Date,
    download: String,
    todos: Array
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", ProjectSchema);
