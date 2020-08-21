const Book = require('../models/book');
const Author = require('../models/author');
const AuthorBook = require('../models/author_book');
const { Op, QueryTypes } = require("sequelize");
const sequelize = require('../config/sequelize_db_connection');

const getBooksByAuthor = (authorName) => {
    return Book.findAll(
        {
            include: { model: Author, attributes: ['fullname'], through: { attributes: [] }, where: { fullname: { [Op.substring]: authorName } } },
        });
}


const getBooksByAuthorCount = (authorCount) => {
    return sequelize.query(`
    select book.id, book.name, book.description, book.year, book.genre, count(author_book.author_id) as author_count
                                from book
                                inner join author_book on book.id = author_book.book_id
                                group by book.id, book.name
                                having author_count = ?`, { replacements: [authorCount], type: QueryTypes.SELECT });
}


module.exports = {
    getBooksByAuthor,
    getBooksByAuthorCount
}