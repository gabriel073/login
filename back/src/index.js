const express = require('express');
const app = express();
const routes = require('./api/endPoints');
const cors = require('cors');

const port = process.env.PORT || 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"]
}));

app.use('/', routes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})