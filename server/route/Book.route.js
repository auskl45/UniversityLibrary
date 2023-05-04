const express = require('express');
const router = express.Router();

const bookController = require('../controller/Book.controller');
const verifyToken = require('../middleware/verifyToken');
router.post('/addBook',verifyToken ,bookController.addBook);
router.get('/listBooks',verifyToken, bookController.listBooks);
router.get('/listBook/:name',verifyToken, bookController.listBook);
router.put('/updateBook/:id',verifyToken, bookController.updateBook);
router.delete('/deleteBook/:id',verifyToken, bookController.deleteBook);
router.get('/listPublicBook',verifyToken, bookController.listPublicBooks);



module.exports = router;