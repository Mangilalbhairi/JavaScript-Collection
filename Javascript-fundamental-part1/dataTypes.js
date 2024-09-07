// DataTypes in JavaScript
/* 1. Number : Floating point numbers -> Used for decimal and integers (let age = 25)
   2. String : Sequence of characters -> Used for text (let firstName = "jonas")
   3. Boolean : Logical type that only be true or flase -> Used for taking decision (let isLogedIn = true)
   4. Undefined : Value taken by a variable that is not yet defined ("empty value")
   5. Null : Also menas empty value
   6. Symbol : (ES2015) Value that is unique and cannot be changed (Not useful for now)
   7. BigInt (ES2020): Larger integers than the Numbers type can hold

   Note --> : JavaScript has dynamic typing: We do not have to manually define the date types of the value stored in a varialbe instead data types are determined automatically.

   */
  let javaScripteIsFun = "YES!";
  console.log(typeof javaScripteIsFun);//String

  let year;
  console.log(typeof year); //undefined

  year = 90; 
  console.log(typeof year); //Number

  let isLogedIn = null;
  console.log(typeof isLogedIn); //Object

