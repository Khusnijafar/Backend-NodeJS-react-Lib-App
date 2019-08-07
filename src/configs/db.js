require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST  || 'remotemysql.com',
    user: process.env.DB_USER || 'Zaf1i4gH6U',
    password: process.env.DB_PASS || 'eUWNKx3zdL',
    database: process.env.DB_NAME || 'Zaf1i4gH6U',
});

connection.connect((err) => {
    if (err) console.log(`Error: ${err}`);
});

module.exports = connection;
