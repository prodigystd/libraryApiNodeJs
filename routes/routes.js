const express = require('express');
const router = express.Router();
const authorContorller = require('../controllers/author_controller');
const bookController = require('../controllers/book_controller');

router.get('/', (req, res) => {
    res.send({ "Library Api Verion": "1.0.0" });
});

router.get('/author/authors-by-book', authorContorller.authorsByBook);
router.get('/book/books-by-author', bookController.booksByAuthor);
router.get('/book/books-by-author-count', bookController.booksByAuthorCount);

module.exports = router;