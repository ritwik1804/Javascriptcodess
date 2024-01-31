// mutable object(change and object)and immutable object (cannot change in any object)

//let num= [1,2,3];
//console.log(num)
//num.push(6)
//console.log(num);

let arr1= [1,2,3];
let arr2= [4,5,6];
let arr3= [7,8,9];

let arr4= arr1.concat(arr2)
let arr5= arr2.concat(arr3)
let arr6= arr3.concat(arr1,arr2)

console.log(arr4)
console.log(arr5)
console.log(arr6)
