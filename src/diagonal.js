const widthQuestion = require("readline-sync");
const paperWidth = widthQuestion.question("Width: ");
const lengthQuestion = require("readline-sync");
const paperLength = lengthQuestion.question("Length: ");
let paperDiagonal = Math.hypot(paperWidth, paperLength)
console.log(paperDiagonal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
