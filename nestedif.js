const readlineSync = require("readline-sync");
const number = Number(readlineSync("enter a number"));
const remainder = number%2;
if(remainder=== 0){
    console.log(`${number} is an even number`);
    if(number%4=== 0){
        console.log(`${number} is an even number`);
    }
}
else{
    console.log("It is an odd number");
    if(number%5 === 0){
        console.log(`${number} is an number`);
    }
    else{
        console.log(`${number} is not divisible by 5`);
    }
}