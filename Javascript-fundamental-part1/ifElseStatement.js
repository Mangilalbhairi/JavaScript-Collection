//Taking decision if else statement

const age = 15;
if(age >= 18)
    console.log("Sarah can start driving license");
else{
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. wait another ${yearLeft} years:)`)
}

const birthYear = 1999;
let century;
if (birthYear <= 2000)
    century = 20;
else{
    century = 21;
}
console.log(`century : ${century}`)


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBmi = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBmi);


if(BMIMark > BMIJohn)
    console.log(`Mark's BMI is higher than Johan's`)
else{
    console.log(`Johan's BMI is higher than Mark's `)
}