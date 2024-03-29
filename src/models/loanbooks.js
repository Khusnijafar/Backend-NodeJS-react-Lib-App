require('dotenv').config()
const connection = require('../configs/db')
module.exports = {
    getLoanbooks: (search) => {
        console.log(search);
        return new Promise((resolve, reject) => {
            if (search) {
                connection.query("SELECT `loan_book`. *, `user`.`fullname`, `data_book`.`title`, `data_book`.`image`, `data_book`.`writer` FROM loan_book INNER JOIN user ON loan_book.card_number = user.card_number INNER JOIN data_book ON loan_book.id_book = data_book.id_book WHERE loan_book.card_number LIKE ? OR user.fullname LIKE ? ORDER BY id_loanbook DESC", [`%${search}%`, `%${search}%`, `%${search}%`], (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            } else {
                connection.query("SELECT `loan_book`.*, `user`.`fullname`, `data_book`.`title`, `data_book`.`image`, `data_book`.`writer` FROM loan_book INNER JOIN user ON loan_book.card_number = user.card_number INNER JOIN data_book ON loan_book.id_book = data_book.id_book ORDER BY id_loanbook DESC", (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
            }
        })
    },
    loanbooksCardNumber: (card_number) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT `loan_book`.*, `user`.`fullname`, `data_book`.`title`, `data_book`.`image`, `data_book`.`writer`, FROM loan_book INNER JOIN user ON loan_book.card_number = user.card_number INNER JOIN data_book ON loan_book.id_book = data_book.id_book WHERE `user`.`card_number` = ? ORDER BY id_loanbook DESC", card_number, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    loanbooksDetail: (id_loanbook) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT loan_book.*, user.fullname FROM loan_book INNER JOIN user ON loan_book.card_number = user.card_number WHERE id_loanbook = ?", id_loanbook, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateLoanbooks: (id_loanbook, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE loan_book SET ? WHERE id_loanbook=?", [data, id_loanbook], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertLoanbooks: (data, id_book) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO loan_book SET ?", data, (err, result) => {
                if (!err) {
                    connection.query("UPDATE data_book SET status = 1 WHERE id_book = ? ", id_book)
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteLoanbooks: (id_loanbook) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM loan_book WHERE id_loanbook = ?", id_loanbook, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}