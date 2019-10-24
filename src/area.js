const inchSquaredToMillimeterSquared = 645.16;
const widthQuestion = require("readline-sync");
const paperWidth = widthQuestion.question("Width: ");
const lengthQuestion = require("readline-sync");
const paperLength = lengthQuestion.question("Length: ");
let paperAreaInSquareInches = paperWidth * paperLength;
let paperAreaInSquareMillimeters = paperAreaInSquareInches * inchSquaredToMillimeterSquared;
console.log(paperAreaInSquareMillimeters.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
