const inchToCentimeter = 2.54;
console.log();
const widthQuestion = require("readline-sync");
const paperWidth = widthQuestion.question("Width: ");
const lengthQuestion = require("readline-sync");
const paperLength = lengthQuestion.question("Length: ");
let paperPerimeterInInches = 2 * paperWidth + 2 * paperLength;
let paperPerimeterInCentimeters = inchToCentimeter * paperPerimeterInInches;
console.log("A(n) " + paperWidth + "-by-" + paper length + "-inch sheet of paper has a perimeter of " + paperPerimeterInCentimeters.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "centimeter(s).");
