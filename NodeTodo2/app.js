var express = require('express');
var app = express();

var mongoose = require('mongoose');
var conf = require('./config/');
var setupController = require('./controllers/setupController');

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
mongoose.connect(conf.getInitDatabaseString());
setupController(app);

app.listen(port, function(){
    console.log("I can hear you @ : 3000!!! :) well done!");
})