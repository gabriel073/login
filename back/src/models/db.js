const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    database: 'project_jwt',
    user: 'root',
    password: 'mysql2023',

});


connection.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log('Conexion exitosa!!')
    }
})
module.exports = connection;