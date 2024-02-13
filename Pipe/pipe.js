var fs = require("fs");
var zlib = require("zlib");

var readble = fs.createReadStream(__dirname + "/greet.txt");
var writable = fs.createWriteStream(__dirname + "/greet_copy.txt");
var compress = fs.createWriteStream(__dirname + "/greet.txt.gzip");

var gzip = zlib.createGzip();
readble.pipe(writable);

readble.pipe(gzip).pipe(compress);
