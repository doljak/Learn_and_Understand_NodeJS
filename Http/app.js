var http = require('http');
var fs = require('fs');

http
    .createServer(function (req, res) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        // var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
        // var message = 'Hello World...'
        // html = html.replace('{Message}', message);
        // res.end(html)

        fs.createReadStream(__dirname + '/index.html','utf8').pipe(res)
    })
    .listen('1337', function (resp) {
        console.log('I hear you! :) @:1337')
    }
);
