const express = require('express')
const Route = express.Router()
const BookController = require('../controllers/books')
const multer = require('multer')
const path = require('path')

const uploadImage = require('../helpers/uploading')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage})

Route 
    .get('/', BookController.getBooks)
    .get('/:id_book', BookController.bookDetail)
    .patch('/:id_book', BookController.updateBook)
    .post('/', upload.single('image'), BookController.insertBook)
    .delete('/:id_book', BookController.deleteBook)

module.exports = Route