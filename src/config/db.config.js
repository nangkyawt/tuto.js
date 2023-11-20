// Cloud

module.exports = {
  HOST: "dpg-cldevv7gsrdc73fksf2g-a",
  USER: "postgres",
  PASSWORD: "at91RwjB7NPOL54qzdom7DBwzF1fD1CD",
  DB: "tuto_eido",
  dialect: "postgres", //mysql, sqlite
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// Local
// module.exports = {
//   HOST: "localhost",
//   USER: "postgres",
//   PASSWORD: "5112001",
//   DB: "tuto",
//   dialect: "postgres", //mysql, sqlite
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };
