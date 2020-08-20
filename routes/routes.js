const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.get('/', (req, res) => {
    res.send({ "Library Api Verion": "1.0.0" });
});

router.get('/authors', async (req, res) => {
    const authors = await Author.findAll();
    res.send(authors);
})


module.exports = router;