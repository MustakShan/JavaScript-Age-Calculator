let ageCalculator = "This is The Current Age of my Friends";
console.log(ageCalculator);

const currentYear = 2021;
const birthMustak = 2002;
const birthDip = 2005;
const birthEmon = 2010;
let ageMustak = currentYear - birthMustak;
console.log(ageMustak);

let ageDip = currentYear - birthDip;
console.log(ageDip);

let ageEmon = currentYear - birthEmon;
console.log(ageEmon);

const ageCompare = "This is the age comparison of my friends";
console.log(ageCompare);

console.log(ageEmon < ageDip < ageMustak);

const averageAge = "This is the Average Age of my friends";
console.log(averageAge);

let average = (ageMustak + ageDip + ageEmon) / 3;
console.log(average);