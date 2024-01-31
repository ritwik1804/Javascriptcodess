//const displaymessage= " I am a fighter"
//console.log(displaymessage.includes("FIGHTER"));

//const displaymessage= "I am a fighter"
//if(displaymessage.includes("loser")){
 //   console.log(" Person is a fighter")
//}
//else{
  //  console.log("Person is a loser")
//}


const displaymessage= "I am a fighter"
const vowels= "aeiou"
let flag= true

for(let char of displaymessage){
    if(displaymessage.includes(char)){
        flag== true;
        break;
        //console.log("vowels are present")
    }
    else{
        flag == false;
        //console.log(" No vowels")
    }

}

if (flag == true){
    console.log("Vowels are presnt in a string")
}
else{
    console.log("no vowels")
}