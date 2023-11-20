const express = require("express");
const tutorialCtrl = require("../ctrls/tuto");

module.exports = (app) => {
  const router = express.Router();
  router.post("/", tutorialCtrl.create).get("/", tutorialCtrl.findall);
  router
    .get("/:id", tutorialCtrl.findOne)
    .delete("/:id", tutorialCtrl.delete)
    .patch("/:id", tutorialCtrl.update);
  app.use("/api/v1/tutorial", router);
};
