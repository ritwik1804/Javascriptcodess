let studentname= ["A","B","C","D","E","F","G",1,2,3,["HTML","js","css"],{officename: "rm"}];
//console.log(studentname);
//console.log(studentname[10])
//console.log(studentname[11])

//for(i=0; i<11; i++){
  //  console.log(studentname[i]);
//}

//let arrlength= studentname.length
//for(i=0; i<arrlength; i++){
  //  console.log(studentname[i]);
//}

//for(let name of studentname){// of give you the name in the array
  //  console.log(name);
//}

for(let name in studentname){// in give you the index in an array
    console.log(name)
}

