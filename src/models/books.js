require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getBooks: (search, page) => {
        return new Promise((resolve, reject) => {
            if (search) {
                connection.query("SELECT id_book, title, image, location, writer, description, data_book.id_category, name_category, status, created_at, updated_at FROM data_book INNER_JOIN category ON data_book.id_category = category.id_category WHERE data_book.location LIKE ? OR data_book.title LIKE ? ORDER BY id_book desc", [`%{search}%`, `%{search}%`, `%{search}%`], (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            } else if (page) {
                connection.query("SELECT id_book, title, image, writer, description, location, data_book.id_category, name_category, status, created_at, updated_at FROM data_book INNER JOIN category ON data_book.id_category = category.id_category ORDER BY id_book desc LIMIT " + (page * 12 - 12) + ", 12", (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            } else {
                connection.query("SELECT id_book, title, image, writer, description, location, data_book.id_category, name_category, status, created_at, updated_at FROM data_book INNER JOIN category ON data_book.id_category = category.id_category ORDER BY id_book desc", (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            }
        })
    },
    bookDetail: (id_book) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT id_book, title, image, writer, description, location, data_book.id_category, name_category, status, created_at, updated_at, FROM data_book INNER JOIN category ON data_book.id_category = category.id_category WHERE id_book = ?", id_book, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateBook: (id_book, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE data_book SET ? WHERE id_book = ?", [data, id_book], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertBook: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO data_book SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteBook: (id_book) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM data_book WHERE id_book = ?", id_book, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}