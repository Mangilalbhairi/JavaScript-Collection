// operators in javaScript
// 1. Arithematic operators in javaScript

const currentYear = 2024;
const birthYearJonas = 1990;
const birthYearSarah = 1991;
const ageJonas = currentYear - birthYearJonas;
const ageSarah = currentYear - birthYearSarah;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas /10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "walkar";
console.log(firstName + " " + lastName);

// 2. Assignment operators in javaScript
let x = 10 + 5; // value of x is : 15
x += 10 // x = x + 10 means value of x now is 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1
x--;// x = x - 1
console.log("value of x:",x);

// 3. Comparision operators
console.log(ageJonas > ageSarah)// > , <, >=, <= 
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;