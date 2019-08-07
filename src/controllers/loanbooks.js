const loanbooksModel = require('../models/loanbooks')
const miscHelpers = require('../helpers/helpers')

module.exports = {
    getLoanbooks: (req, res) => {
        const search = req.query.search
        loanbooksModel.getLoanbooks(search)
            .then((resultLoanbooks) => {
                const result = resultLoanbooks
                console.log(result);
                miscHelpers.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    loanbooksCardnumber: (req, res) => {
        const card_number = req.params.card_number
        console.log(card_number);
        loanbooksModel.loanbooksCardNumber(card_number)
            .then((resultLoanbooks) => {
                const result = resultLoanbooks
                miscHelpers.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    loanbooksDetail: (req, res) => {
        const id_loanbook = req.params.id_loanbook
        loanbooksModel.loanbooksDetail(id_loanbook)
            .then((resultLoanbooks) => {
                const result = resultLoanbooks
                miscHelpers.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    updateLoanbooks: (req, res) => {
        console.log(req.body);
        console.log(req.params);
        
        const id_loanbook = req.params.id_loanbook
        const {
            card_number,
            id_book,
            expired_date,
            forfeit,
            information
        } = req.body
        const data = {
            card_number,
            id_book,
            expired_date,
            forfeit,
            information,
            updated_at: new Date()
        }
        loanbooksModel.updateLoanbooks(id_loanbook, data)
            .then((resultLoanbooks) => {
                const result = resultLoanbooks
                miscHelpers.response(res, result, 200, [id_loanbook, data])
            })
            .catch((error) => {
                console.log(error);
            })
    },
    insertLoanbooks: (req, res) => {
        const idBook = parseInt(req.params.id_book)
        const {
            card_number,
            id_book,
            expired_date,
            forfeit,
            information
        } = req.body
        const data = {
            card_number,
            id_book,
            expired_date,
            forfeit,
            information,
            updated_at: new Date(),
            created_at: new Date()
        }
        loanbooksModel.insertLoanbooks(data, idBook)
            .then((resultLoanbooks) => {
                const result = resultLoanbooks
                console.log(result);
                
                miscHelpers.response(res, result, 200, data)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    deleteLoanbooks: (req, res) => {
        const id_loanbook = req.params.id_loanbook
        loanbooksModel.deleteLoanbooks(id_loanbook)
            .then((resultLoanbooks) => {
                const result = resultLoanbooks
                miscHelpers.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    }
}