module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "5112001",
  DB: "tuto",
  dialect: "postgres", //mysql, sqlite
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
