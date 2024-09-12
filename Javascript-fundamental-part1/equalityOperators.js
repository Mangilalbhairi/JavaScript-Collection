// Equality Operators == vs === in JavaScript
const age = '18';
if(age === 18)
    console.log('You just became an adult :D (strict)');
if(age == 18)
    console.log('You just became adult :D (loose)')

// const favourite = prompt("what's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);
let favourite = "23";
if(favourite === 23)
    console.log("Cool! 23 is an amazing number!")
else if (favourite === 7){
    console.log('7 is also a cool number')
}
else if (favourite === 9){
    console.log('9 is also a cool number')
}
else{
    console.log('Number is not 23 or 7 or 9')
}