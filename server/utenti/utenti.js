var express = require('express');
//var controller = require('./controller.js');

var utenti = express.Router(); // creo il router

//lista di tutti gli utenti
utenti.get('/', function(req,res) {
    res.send ('ciao ciao')
})


module.exports = utenti; //lo esportiamo