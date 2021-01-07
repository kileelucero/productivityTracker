// Dependency
var Sequelize = require("sequelize");

// MySQL connection using Sequelize, Second argument is Username and Third argument is password.
var sequelize = new Sequelize(process.env.DATABASENAME, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Export
module.exports = sequelize;