const connection = require('../models/db.js');


module.exports.login = (req, res) => {

    const { username, password } = req.body;



    // const consult = 'select * from login';

    // try {
    //     connection.query(consult, (error, results) => {
    //         console.log(results)
    //         res.json(results);
    //     })
    // } catch (error) {
    //     console.log(error)
    // }

}