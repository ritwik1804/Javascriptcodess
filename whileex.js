let readlineSync= require("readline-sync");
let number= readlineSync.question("Enter a number less than 50");
while(number>=50){
    number= readlineSync.question("Enter a number less than 50");
}
console.log("Number accepted");