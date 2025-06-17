const mysql = require('mysql2/promise');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'listadetarefasbd',
};

const pool = mysql.createPool(config);

module.exports = pool;