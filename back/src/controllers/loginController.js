const connection = require('../models/db.js')


module.exports.login = (req, res) => {
    try {
        const { user } = req.body;
        console.log('User: ', user);

    } catch (error) {
        console.log(error)
    }

    // try {
    //     connection.query(consult, [username, password], (err, result) => {
    //         if (err) {
    //             res.send(err);
    //         }


    //     })
    // } catch (e) {

    // } 

}