const Greet = require("./greet.js");
// const Emmiter = require("./emmiter");
const EventEmmiter = require("events");
const util = require("util");

const person = new Greet("Tony");
const emtr = new EventEmmiter();
util.inherits(Greet, EventEmmiter);

emtr.on("greet", () => {
  console.log("Someone send a greet!");
});

emtr.on("greet", (who) => {
  console.log(`Yes, ${who}`);
});

person.sayHello();
emtr.emit("greet", "It's Tony");

person.on("aswer", () => `Yes, I\'m ${person.firstname}`);
person.emit("aswer");
