const connection = require('../models/db')


module.exports.login = (req, res) => {
    const { username, password } = req.body;


    try {
        connection.query(consult, [username, password], (err, result) => {
            if (err) {
                res.send(err);
            }


        })
    } catch (e) {

    }

}