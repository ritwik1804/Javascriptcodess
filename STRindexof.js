//const displaymessage= "I am Ritwik Mohanty"
//console.log(displaymessage.indexOf("i", 7))


//function findcharacter(text, char){
  //  const index= text.indexOf(char)
   // if(index == -1){
     //   return "Character Not found"
    //}
    //else{
      //  return "Character is present in the string"
    //}
//}
//
//const result= findcharacter("I am Ritwik Mohanty", "R")
//console.log(result)

const findcharacter = (text, char) => text.indexOf(char) === -1?"Char Not found": "Character found in str";
const result= findcharacter("I am Ritwik Mohanty", "z")
console.log(result)