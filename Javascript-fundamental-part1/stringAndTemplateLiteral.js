// string and template literal in javascript
const firstName = "jonas"
const job = "teacher";
const birthYear = 1991;
const currentYear = 2024;

 const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
 console.log(jonas)

// implement same thing using template literal 
const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string....`);

console.log(`String with \n\
   multiple \n\
   lines `)
