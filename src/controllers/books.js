const bookModels = require('../models/books');
const miscHelper = require('../helpers/helpers');

module.exports = {
    getIndex: (req, res) => {
        return res.json({
            message: 'Hello Library Book API'
        })
    },
    getBooks: (req, res) => {
        var jumlah = 0
        bookModels.getBooks()
            .then((resultBook) => {
                jumlah = resultBook.length
            })
        const search = req.query.search
        const page = req.query.page
        bookModels.getBooks(search, page)
            .then((resultBook) => {
                const result = resultBook
                // console.log(result);
                miscHelper.response(res, result, 200, jumlah)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    bookDetail: (req, res) => {
        const id_book = req.params.id_book
        bookModels.bookDetail(id_book)
            .then((resultBook) => {
                const result = resultBook
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    updateBook: (req, res) => {
        const id_book = req.params.id_book
        const {
            title,
            image,
            writer,
            description,
            location,
            id_category,
            status
        } = req.body
        const data = {
            title,
            image,
            writer,
            description,
            location,
            id_category,
            status,
            updated_at: new Date()
        }
        bookModels.updateBook(id_book, data)
            .then((resultBook) => {
                const result = resultBook
                miscHelper.response(res, result, 200, [id_book, data])
            })
            .catch((error) => {
                console.log(error);
            })
    },
    insertBook: (req, res) => {
        console.log(req.file)
        // const image = req.file.filename
        const {
            title,
            // image,
            writer,
            description,
            location,
            id_category,
            status
        } = req.body
        const data = {
            title,
            // image,
            image: 'http://localhost:3001/upload/' + req.file.filename,
            writer,
            description,
            location,
            id_category,
            status: 0,
            created_at: new Date(),
            updated_at: new Date()
        }
        bookModels.insertBook(data)
            .then((resultBook) => {
                const result = resultBook
                miscHelper.response(res, result, 200, data)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    deleteBook: (req, res) => {
        const id_book = req.params.id_book
        bookModels.deleteBook(id_book)
            .then((resultBook) => {
                const result = resultBook
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    }
}