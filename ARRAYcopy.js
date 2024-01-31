//let a1= [1,2,3];
//let a2= a1;

//console.log("Arr 1 -",a1);
//console.log("Arr 2 -",a2);
// shallow copy
//a1.push(4);

//console.log("Updated array a1- ",a1);
//console.log("updated array a2- ",a2);

//spread operator

//let a3= [...a1];
//console.log("Arr 3-", a3)
//a3.push(5)
//console.log("Updated array a3- ",a3);
//console.log("Updated array a1- ",a1);


let arr4= [2,3,4]
let arr5= [];

for(let number of arr4){
   arr5.push(number);
}
 console.log("ARR 5-",arr5);
 console.log("ARR 4-",arr4);

 arr5.push(6)

 console.log("Updated ARR 5-", arr5);
 console.log("Updated ARR 4-", arr4);


 
