const authorRepository = require('../repositories/author_repository');

const authorsByBook = async (req, res) => {
    const bookName = req.query.book_name;
    const authors = await authorRepository.getAuthorsByBook(bookName);
    res.send(authors);
}


module.exports = {
    authorsByBook
}