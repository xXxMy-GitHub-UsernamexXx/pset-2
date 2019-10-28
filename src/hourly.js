console.log();
const wageQuestion = require("readline-sync");
const hourlyWage = Number(wageQuestion.question("Hourly wage: "));
console.log();
const mondayQuestion = require("readline-sync");
const mondayHours = Number(mondayQuestion.question("Monday: "));
const tuesdayQuestion = require("readline-sync");
const tuesdayHours = Number(tuesdayQuestion.question("Tuesday: "));
const wednesdayQuestion = require("readline-sync");
const wednesdayHours = Number(wednesdayQuestion.question("Wednesday: "));
const thursdayQuestion = require("readline-sync");
const thursdayHours = Number(thursdayQuestion.question("Thursday: "));
const fridayQuestion = require("readline-sync");
const fridayHours = Number(fridayQuestion.question("Friday: "));
const saturdayQuestion = require("readline-sync");
const saturdayHours = Number(saturdayQuestion.question("Saturday: "));
const sundayQuestion = require("readline-sync");
const sundayHours = Number(sundayQuestion.question("Sunday: "));
let totalHours = Number(mondayHours + tuesdayHours + wednesdayHours + thursdayHours + fridayHours + saturdayHours + sundayHours);
let moneyMade = Number(totalHours * hourlyWage);
moneyMade = moneyMade.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
let moneyMessage = `You'll make $${moneyMade} this week.`;
console.log();
console.log(moneyMessage);
