const inchToCentimeter = 2.54;
const widthQuestion = require("readline-sync");
const paperWidth = widthQuestion.question("Width: ");
const lengthQuestion = require("readline-sync");
const paperLength = lengthQuestion.question("Length: ");
let paperPerimeterInInches = 2 * paperWidth + 2 * paperLength;
let paperPerimeterInCentimeters = inchToCentimeter * paperPerimeterInInches;
console.log(paperPerimeterInCentimeters.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
