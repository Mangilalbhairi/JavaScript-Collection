//Type conversion and coericion in javascript
//Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991 '1991'
console.log(typeof inputYear) // String
console.log(inputYear + 18) // 199118
console.log(Number(inputYear) + 18)// 2009

console.log(Number('jonas'))// NaN 
console.log(typeof NaN);// number

console.log(String(20), 20)// '20' 20
console.log(String(20) + 20) // 2020

//Type Coercion
console.log('I am ' + 23 + 'years old')// "I am 23 years old"
console.log('23' - '10' - 3) // 10 string convert into number 
console.log('23' * 2)// 46
console.log('23' / 2)// 11.5

let n = '1' + 1; // "11"
n = n - 1; //10
console.log(n);// 10

