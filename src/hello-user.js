console.log();
console.log("Hi! What's your name?");
const nameQuestion = require("readline-sync");
const nameOfUser = nameQuestion.question();
console.log();
console.log("Hello, " + nameOfUser + "!");
