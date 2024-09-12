// Truthy and falsy value in javascript
// 5 Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));// False
console.log(Boolean(undefined));//Fasle
console.log(Boolean('Jonas'));//Fasle
console.log(Boolean({}));//Fasle
console.log(Boolean(''));//Fasle

const money = 100;
if(money) {
    console.log("Don't spend it all ;)");
}
else{
    console.log("You should get a job!!");
}
let height = 0;

if (height)
    console.log("YAY! Height is defined");
else{
    console.log("Height is UNDEFINED!!")
}