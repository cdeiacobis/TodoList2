var express = require('express');
var controller = require('./controller.js');

var utenti = express.Router(); // creo il router

//lista di tutti gli utenti
utenti.get('/', controller.getAll)


module.exports = utenti; //lo esportiamo