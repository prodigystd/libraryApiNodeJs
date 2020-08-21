const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('library', 'root', 'library', {
    host: 'database_container',
    dialect: 'mysql'
});

module.exports = sequelize;