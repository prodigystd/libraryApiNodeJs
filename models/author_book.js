const { DataTypes } = require('sequelize');
const Author = require("./author");
const Book = require("./book");
const sequelize = require("../config/sequelize_db_connection");

const AuthorBook = sequelize.define('AuthorBook', {
    author_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Author,
            key: 'id'
        }
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Book,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'author_book'
});

Book.belongsToMany(Author, {through: AuthorBook, foreignKey: 'book_id'});
Author.belongsToMany(Book, {through: AuthorBook, foreignKey: 'author_id'});

module.exports = AuthorBook;