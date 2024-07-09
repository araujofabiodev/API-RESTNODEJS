const roteador = require('express').Router();

roteador.use('/', (req, res) => {
    res.send('oi');
});

module.exports = roteador;