var express = require('express');
var controller = require('./controller.js');

var todos = express.Router(); //abbiamo creao il router

//lista di tutti  todos
todos.get('/', controller.getAll); //

//dettaglio di un to do
todos.get('/:id', controller.getOne);


//creazione di un to do
todos.post('/', controller.create);


//modifica di un to do
todos.put('/:id', controller.update);

//cancellazione di un to do
todos.delete('/:id', controller.deleteOne)



module.exports = todos; //lo esportiamo