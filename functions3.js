function calculatesum(min,max)
{
    let total=0;
    for(let i=min; i<=max; i++){
     total=total+i;
    }
   return total;
}
const result= calculatesum(1,5);
console.log(result)

