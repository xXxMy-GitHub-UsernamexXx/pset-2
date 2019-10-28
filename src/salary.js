const pretax401kContribution = Number(0.07);
const federalIncomeTax = Number(0.157);
const stateIncomeTax = Number(0.0447);
const socialSecurityTax = Number(0.062);
const medicareTax = Number(0.0145);
const numberOfMonths = Number(12);
const numberOfMonthlyPayments = Number(2);
console.log();
const salaryQuestion = require("readline-sync");
const annualSalary = Number(salaryQuestion.question("Annual salary: "));
let salaryWithout401k = annualSalary - (annualSalary * pretax401kContribution);
let taxedSalary = salaryWithout401k - ((federalIncomeTax + stateIncomeTax + socialSecurityTax + medicareTax) * salaryWithout401k);
let biweeklyCheckAmount = taxedSalary / (numberOfMonths * numberOfMonthlyPayments)
biweeklyCheckAmount = biweeklyCheckAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
let checkMessage = `Your take-home pay each check will be $${biweeklyCheckAmount}.`;
console.log();
console.log(checkMessage);
