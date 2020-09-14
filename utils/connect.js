// import the Sequelize constructor from the library to build methods off of
const Sequelize = require('sequelize');
require('dotenv').config();


let sequelize;
//use JAWSDB first, if not, use local host
if (process.env.JAWSDB_URL) {
  //create new connection to db
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;