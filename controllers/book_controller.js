const bookRepository = require('../repositories/book_repository')

const booksByAuthor = async (req, res) => {
    const authorName = req.query.author_name;
    const books = await bookRepository.getBooksByAuthor(authorName);
    res.send(books);
}

const booksByAuthorCount = async (req, res) => {
    const authorCount = req.query.author_count;
    const books = await bookRepository.getBooksByAuthorCount(authorCount);
    res.send(books);
}


module.exports = {
    booksByAuthor,
    booksByAuthorCount
}