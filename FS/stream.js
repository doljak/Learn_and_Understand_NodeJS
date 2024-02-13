var fs = require("fs");

var stream = fs.createReadStream(__dirname + "/greet.txt", {
  highWaterMark: 16 * 1024,
  encoding: "utf8",
});

var stremCopy = fs.createWriteStream(__dirname + "/greet_copy.txt");

stream.on("data", function (chunk) {
  console.log(chunk);
  console.log("ah!!! agora entendi!!!");
  stremCopy.write("Começou cacildis:\n" + chunk + "teste");
});
