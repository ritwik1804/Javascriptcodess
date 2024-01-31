/*const firstname= "";
const secondname= "Ritwik";

console.log(firstname);*/

//console.log(Boolean("Ritwik"));--> output=true
//console.log(Boolean(""));--> output=true
//console.log(Boolean(undefined));//--> output=true

/*const firstname= "";
const secondname= "Ritwik";

const username= firstname || secondname;
console.log(`Name- ${username}`);*/

/*const firstname= null;
const secondname= undefined;

const username= firstname || secondname;
console.log(`Name- ${username}`);*/

/*const firstname= null;
const secondname= "";

const username= firstname || secondname || null ||"ritwik";// short circuiting
console.log(`Name- ${username}`);*/

/*let a= 4;
let b;
 console.log(a+ (b||0));*/

/*let a= 4;
let b = 5;
 console.log(a+(b||0));*/

const firstname= "Ritwik";
const secondname= "Brihant";

const username= firstname && secondname;
console.log(`Name- ${username}`);