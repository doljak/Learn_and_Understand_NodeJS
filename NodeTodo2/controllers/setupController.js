var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setup', function(req, res){
        var startTodos = [
            {
                username: "Jef's todo",
                todo: "study",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "Jef's todo",
                todo: "study",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "Jef's todo",
                todo: "study",
                isDone: false,
                hasAttachment: false
            },
        ]

        Todos.create(startTodos).then(function(result){
            res.send(result);
        })
    });
}