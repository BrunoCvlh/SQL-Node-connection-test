const Sequelize = require('sequelize');

//Conexao com o banco de dados mySQL
const sequelize = new Sequelize('datadimontagna', 'root', 'Luanalinda350400@', {
  host: "localhost",
  dialect: 'mysql'
});

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

