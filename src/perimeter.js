const inchToCentimeter = 2.54;
const widthQuestion = require("readline-sync");
const paperWidth = widthQuestion.question("Width: ");
const lengthQuestion = require("readline-sync");
const paperLength = lengthQuestion.question("Length: ");
let paperPerimeterInInches = 2 * paperWidth + 2 * paperLength;
let paperPerimeterInCentimeters = inchToCentimeter * paperPerimeterInInches * 100
Math.round(paperPerimeterInCentimeters);
paperPerimeterInCentimeters = paperPerimeterInCentimeters / 100;
let paperPerimeterInCentimetersWithCommas = paperPerimeterInCentimeters.toLocaleString();
console.log(paperPerimeterInCentimetersWithCommas);
