var express = require('express');
var controller = require('./controller.js');

var utenti = express.Router(); // creo il router

//lista di tutti gli utenti
utenti.get('/', controller.getAll)

//lista di un solo utente
utenti.get('/:id', controller.getOne)

//creazione di un utente
utenti.post('/', controller.create);


//modifica di un utente
utenti.put('/:id', controller.update);

//cancellazione di un utente
utenti.delete('/:id', controller.deleteOne)


module.exports = utenti; //lo esportiamo