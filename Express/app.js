var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencoded = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json()

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + "/public"))

app.set('view engine', 'ejs')

app.use('/', function (req, res, next) {
    console.log("Request Url: " + req.url);
    next();
})

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id, QRST: req.query.qrst })
})

app.post('/person', urlencoded, function (req, res) {
    res.send('Thank you' + req.body.firstname + " " + req.body.lastname);
})

app.post('/personjson', jsonParser, function (req, res) {
    res.send('Thank you json parser! ' + req.body.firstname + " " + req.body.lastname)
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})

app.get('/api', function (req, res) {
    res.json({ firstname: 'João', lastname: 'da Silva' })
})
app.listen(port);