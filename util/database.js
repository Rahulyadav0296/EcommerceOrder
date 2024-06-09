const Sequelize = require("sequelize");

const sequelize = new Sequelize("poolscheme", "root", "rahul0202", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
