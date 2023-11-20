const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize"); //ORM Object Relational Mapping
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorial = require("./tuto")(sequelize, Sequelize);

module.exports = db;
