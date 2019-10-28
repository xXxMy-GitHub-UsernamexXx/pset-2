const inchSquaredToMillimeterSquared = 645.16;
console.log();
const widthQuestion = require("readline-sync");
const paperWidth = widthQuestion.question("Width: ");
const lengthQuestion = require("readline-sync");
const paperLength = lengthQuestion.question("Length: ");
let paperAreaInSquareInches = paperWidth * paperLength;
let paperAreaInSquareMillimeters = paperAreaInSquareInches * inchSquaredToMillimeterSquared;
paperAreaInSquareMillimeters = paperAreaInSquareMillimeters.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log();
let areaMessage = `A(n) ${paperWidth}-by-${paperLength}-inch sheet of paper has an area of ${paperAreaInSquareMillimeters} square millimeter(s).`
console.log(areaMessage);
