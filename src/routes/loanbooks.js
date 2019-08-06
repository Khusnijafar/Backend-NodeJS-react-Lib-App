const express = require('express')
const Route = express.Router()
const loanbooksController = require('../controllers/loanbooks')
const Auth = require('../helpers/auth')

Route
    .all('/*', Auth.authInfo)
    .get('/', loanbooksController.getLoanbooks)
    .get('/:id_loanbook', loanbooksController.loanbooksDetail)
    .get('/:card_number', loanbooksController.loanbooksCardnumber)
    .patch('/:id_loanbook', loanbooksController.updateLoanbooks)
    .post('/', Auth.accesstoken, loanbooksController.insertLoanbooks)
    .delete('/:id_loanbook', loanbooksController.deleteLoanbooks)

module.exports = Route