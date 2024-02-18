var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
const Todos = require('./models/todoModel');



var port = process.env.PORT || 3000;

app.use('/assets', express.static('/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnection());
setupController(app)


app.listen(port, function () {
    console.log('I can hear you @ ' + port + '!')
})