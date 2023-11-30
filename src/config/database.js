const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'andrey',
    database: 'biblioteca_pessoal'
});

module.exports = pool;