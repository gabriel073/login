const connection = require('../models/db.js');


module.exports.ping = (req, res) => {
    const consult = 'select * from login';

    try {
        connection.query(consult, (error, results) => {
            console.log(results)
            res.json(results);
        })
    } catch (error) {
        console.log(error)
    }

}