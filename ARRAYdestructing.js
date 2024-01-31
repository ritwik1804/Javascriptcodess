const numbers= [1,2,3,["a","b","c"]]
//const [a,b,c,courses]= [1,2,3,["a","b","c"]]
//console.log(a)
//console.log(b)
//console.log(c)
//console.log(courses)

const[, , , courses]= numbers
console.log(courses);

let a= 12;
let b= 5;
[a,b]= [b,a]
console.log(a)
console.log(b)