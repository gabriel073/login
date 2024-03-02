const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Servidor funcionando....')
})

app.get('/pingo', (req, res) => {
    res.send('Soy un pingo funcionando....')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})