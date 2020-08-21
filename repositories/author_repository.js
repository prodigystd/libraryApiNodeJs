const Author = require('../models/author');
const Book = require('../models/book');
const AuthorBook = require('../models/author_book');
const { Op } = require("sequelize");

const getAuthorsByBook = (bookName) => {
    return Author.findAll(
        {
            include: { model: Book, attributes: ['name'], through: { attributes: [] }, where: { name: { [Op.substring]: bookName } } },
        });
}

module.exports = {
    getAuthorsByBook
}
