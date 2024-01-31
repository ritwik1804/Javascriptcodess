//const input= "I am Ritwik Mohanty";
//const arr= input.split(" ");
//console.log(arr)
//arr.reverse();
//console.log(arr)
//const ans= arr.join("")
//console.log(ans)


                               //spread array
   const arr1= [1,2,3,4,5]
   //console.log("updated arr- ", arr1)
   //console.log(...arr1) 
   
   const arr2= [8,9] 
   const arr3= [...arr1,6,7,...arr2,10,11];
   console.log(arr3);