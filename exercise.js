//Star Pattern

/*const symbol ="* ";
for(let i=0; i<6; i++){
    console.log(symbol.repeat(i));
}

//reverse of star pattern

for(let i=4; i>=1; i--){
    console.log(symbol.repeat(i));
}*/

/*let userName = "Ritwik Mohanty";
let count= 0;
for(i=0; i<userName.length; i++){
    count++;
}
console.log(`number of characters in the string is ${count}`);*/

//to find even and odd number
/*let rem;
for(let i=1; i<12; i++){
    rem= i%2;
    if(rem === 0){
        console.log(`${i} is an even number`);
    }
    else{
        console.log(`${i} is an odd number`);
    }
}*/

//print of vowels
const inputstring = "hello, i am RM";
const vowels= "aeiou";
for(i=0; i<inputstring.length; i++){
    if(vowels.includes(inputstring[i])){
        console.log(`${inputstring[i]} is a vowel`);
    }
    else{
        console.log(`${inputstring[i]} is not a vowel`);
    }
}

