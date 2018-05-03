const Project = require("../models/project.model");

exports.create = (req, res) => {

  if (!req.body.name) {
    return res.status(400).send({
      message: "Project content can not be empty"
    });
  }

  const project = new Project({
    id: req.body.id,
    name: req.body.name,
    client: req.body.client,
    rate: req.body.rate,
    deadline: req.body.deadline,
    download: req.body.download,
    todos: req.body.todos
  });

  project
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findAll = (req, res) => {
  Project.find()
    .then(projects => {
      res.send(projects);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error"
      });
    });
};

exports.findOne = (req, res) => {
  Project.findById(req.params.projectId)
    .then(project => {
      if (!project) {
        return res.status(404).send({
          message: "Project not found with id " + req.params.projectId
        });
      }
      res.send(project);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Project not found with id " + req.params.projectId
        });
      }
      return res.status(500).send({
        message: "Error retrieving project with id " + req.params.projectId
      });
    });
};

exports.update = (req, res) => {

  if (!req.body.name) {
    return res.status(400).send({
      message: "Project content can not be empty"
    });
  }

  Project.findByIdAndUpdate(
    req.params.projectId,
    {
      id: req.body.id,
      name: req.body.name,
      client: req.body.client,
      rate: req.body.rate,
      deadline: req.body.deadline,
      download: req.body.download,
      todos: req.body.todos
    },
    { new: true }
  )
    .then(project => {
      if (!project) {
        return res.status(404).send({
          message: "Project not found with id " + req.params.projectId
        });
      }
      res.send(project);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Project not found with id " + req.params.projectId
        });
      }
      return res.status(500).send({
        message: "Error updating project with id " + req.params.projectId
      });
    });
};

exports.delete = (req, res) => {
  Project.findByIdAndRemove(req.params.projectId)
    .then(project => {
      if (!project) {
        return res.status(404).send({
          message: "Project not found with id " + req.params.projectId
        });
      }
      res.send({ message: "Project deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Project not found with id " + req.params.projectId
        });
      }
      return res.status(500).send({
        message: "Could not delete project with id " + req.params.projectId
      });
    });
};
