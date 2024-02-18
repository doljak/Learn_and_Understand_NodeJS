const { default: mongoose } = require('mongoose');
var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res){
        var startTodos = [
            {
                username: "Joao",
                todo: "roupas",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "Maria",
                todo: "tecidos",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "Pedro",
                todo: "oculos",
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(startTodos).then(function(results){res.send(results)})
    })
}