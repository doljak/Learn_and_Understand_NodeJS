var fs = require("fs");

var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");
console.log(greet);

var greet2 = fs.readFile(
  __dirname + "/greet.txt",
  "utf-8",
  function (err, data) {
    console.log(err);
    console.log(data);
    console.log(data.toString("utf8"));
  }
);
console.log("teste");
