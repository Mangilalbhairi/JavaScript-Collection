//Variable and values in javascript

let js = "amazing!!";
console.log(js)
//using variable store person profile information
let firstName = "Jonas";
let lastName  = "walkar";
let age = 28;
let email = "jonaswalkar89@gmail.com";
let isLogedIn = true;

//Challenge-1: write a script if an user is logedIn then print user profile information on the console

if(isLogedIn){
    console.log("Hello mrs: ", firstName+" "+lastName)
    console.log(`Hello ${firstName+" "+lastName} you are ${age} years old`)
    console.log(`mrs ${firstName +" "+ lastName} your email is: ${email}`)
}
//Variable naming conventional
/* 1. Camel Case (camelCase) 
   2. Descriptive and Meaningful Names
   3. Use Constants for Immutable Values
   4. Avoid Reserved Keywords
   5. Prefix Boolean Variables with (is, has, can)
   6. Avoid Abbreviations
   7. Consistent Naming Style
   8. Use Nouns for Variables, Verbs for Functions
   9. Global Variables – Be Careful
   10. Temporary Variables --> stick to conventional names like i, j, k for counters or temp for temporary storage.

   */
// Examples
const PI = 3.1415; //  Constant
let userName = "Alice"; // Camel case for regular variables
let isSignedIn = true;  // Boolean with "is" prefix
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";
