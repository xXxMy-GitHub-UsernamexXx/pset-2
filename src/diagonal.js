console.log();
const widthQuestion = require("readline-sync");
const paperWidth = widthQuestion.question("Width: ");
const lengthQuestion = require("readline-sync");
const paperLength = lengthQuestion.question("Length: ");
let paperDiagonal = Math.hypot(paperWidth, paperLength)
console.log();
console.log("A(n) " + paperWidth + "-by-" + paperLength + "-inch sheet of paper has a diagonal of " + paperDiagonal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "inch(es).");
