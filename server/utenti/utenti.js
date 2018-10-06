var express = require('express');
var controller = require('./controller.js');

var utenti = express.Router(); // creo il router

//lista di tutti gli utenti
utenti.get('/', controller.getAll)

//lista di un solo utente
utenti.get('/:id', controller.getOne)

module.exports = utenti; //lo esportiamo