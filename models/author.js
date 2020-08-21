const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize_db_connection');

const Author = sequelize.define('Author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    fullname: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    birth_date: {
        type: DataTypes.DATEONLY
    },
    description: {
        type: DataTypes.TEXT
    }

}, {
    timestamps: false,
    tableName: 'author'
});


module.exports = Author;