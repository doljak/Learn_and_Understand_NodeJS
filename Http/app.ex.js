var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        var html = fs.readFileSync(__dirname + "/index.ex.html", 'utf8')
        html = html.replace('{Message}', 'This is the index route!');
        res.end(html)
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        var obj = {
            name: {
                firstName: 'João',
                lastName: 'Silva'
            }
        }
        res.end(JSON.stringify(obj))
    } else {
        res.writeHead(404)
        res.end('404 - try again')
    }
}).listen(1338, function () {
    console.log('I\'m listening you @:1338')
});