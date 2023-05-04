const { Sequelize } = require('sequelize');

const db = new Sequelize('libreriadb', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  query: { raw: true }
});

module.exports = db;