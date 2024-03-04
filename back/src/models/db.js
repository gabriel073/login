const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql2023',
    database: 'project_jwt'
});

module.exports = connection;