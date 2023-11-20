const db = require("../models/index");
const Tutorial = db.tutorial;

// Create and Save a new post
exports.create = (req, res) => {
  // console.log(res.body);
  // Validate request
  if (!req.body.title) {
    return res.status(400).send({
      message: "Content cannot be empty!",
    });
  }
  Tutorial.create({
    title: req.body.title,
    content: req.body.content,
    published: req.body.published ? req.body.published : false,
  })
    .then((data) => {
      return res.status(201).send({
        status: "success",
        message: "Successfully created a post.",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        status: "fail",
        message: err.message || "Some error occurred while creating a post",
      });
    });
};
exports.findall = async (req, res) => {
  try {
    const title = req.query.title;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",

      data: {
        title,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};
