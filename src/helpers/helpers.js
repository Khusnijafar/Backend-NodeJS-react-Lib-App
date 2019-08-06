const crypto = require('crypto')
module.exports = {
    // response: (res, result, status, error) => {
    //     let resultPrint = {};
        
    //     if (result.length > 0) {
    //         resultPrint.error = error || null;
    //         resultPrint.statusCode = status || 200;
    //         resultPrint.message = "Berikut datanya ya guysss";
    //         resultPrint.result = result;
    //     } else {
    //         resultPrint.error = error || true;
    //         resultPrint.statusCode = 404;
    //         resultPrint.message = "Guys data yang kamu input lo ga tersedia";
    //     }
    //     return res.status(resultPrint.statusCode).json(resultPrint);
    // },
    // response1: (res, result, status, error) => {
    //     let resultPrint = {};

    //     resultPrint.error = error || null;
    //     resultPrint.statusCode = status || 200;
    //     resultPrint.message = "Berikut data yang kamu tambahkan guyss";
    //     resultPrint.result = result;

    //     return res.status(resultPrint.statusCode).json(resultPrint);
    // },
    // response2: (res, result, status, error) => {
    //     let resultPrint = {};

    //     resultPrint.error = error || null;
    //     resultPrint.statusCode = status || 200;
    //     resultPrint.message = "Datanya berhasil kamu update guysss";
    //     resultPrint.result = result;

    //     return res.status(resultPrint.statusCode).json(resultPrint);
    // },
    // response3: (res, result, status, error) => {
    //     let resultPrint = {};

    //     if (result.affectedRows > 0) {
    //         resultPrint.error = error || null;
    //         resultPrint.statusCode = status || 200;
    //         resultPrint.message = "Datanya berhasil kamu hapusss";

    //         return res.status(resultPrint.statusCode).json(resultPrint);
    //     } else {
    //         resultPrint.error = error || true;
    //         resultPrint.statusCode = 404;
    //         resultPrint.message = "datanya ga tersedia ya";

    //         return res.status(resultPrint.statusCode).json(resultPrint);
    //     }
    // }
    response: (res, result, status, error) => {
        let resultPrint = {}
    
        resultPrint.error = error || null
        resultPrint.status_code = status || 200
        resultPrint.result = result
    
        return res.status(resultPrint.status_code).json(resultPrint)
    },
    generateSalt: (length) => {
        return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length)
    },
    setPassword: (password, salt) => {
        let hash = crypto.createHmac('sha512', salt)
        hash.update(password)
        let value = hash.digest('hex')
        return {
          salt: salt,
          passwordHash: value
        }
    }
};