const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize_db_connection');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    year: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT
    },
    genre: {
        type: DataTypes.STRING
    }

}, {
    timestamps: false,
    tableName: 'book'
});


module.exports = Book;