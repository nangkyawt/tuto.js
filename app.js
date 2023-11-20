const express = require("express");
const cors = require("cors");

const app = express();
const db = require("./src/models");

var corsOptions = {
  origin: "*",
};
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(cors(corsOptions));
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

require("./routes/tuto")(app);
module.exports = app;
