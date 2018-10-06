var path = require('path');
var todos = require('../todos/todos.js'); //recuperiamo todos
var utenti = require('../utenti/utenti.js');

var bodyparser = require('body-parser');


module.exports = function (express, app) {

    //PARSE DEL JSON trasformazione dell'oggeto json in javascript
    app.use(bodyparser.json());
    
    //invia la index.html al cliente
    app.get('/', function (req,res) {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    
        });

    //utilizzo il router todos per tutte le rotte che partono da todos
    app.use('/todos', todos); 

    //utilizzo il router utenti per tutte le rotte che partono da utenti
    app.use('/utenti', utenti); 
}