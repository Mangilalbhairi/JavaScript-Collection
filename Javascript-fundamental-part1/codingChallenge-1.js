/* Coding Challenge-1
1. Store Mark's and John's mass and  height in variables
2. Calculate both their BMI's using the formula (you cna even implement both version)
3. Create a boolean variables 'markHigherBMI' containing information about wheather Mark has a higher BMI than John

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. john weights 92 kg and is  1.95 a tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall john weights 85 kg and is 1.76 m tall. */

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 95;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBmi = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBmi);
console.log(markHigherBmi?"mark BMI is high ":"John BMI is high")


