// global scope
var c = 300
let a = 300

if (true){  // this are the scopes
    let a = 10
    const b= 20
    var c = 30
    // console.log("INNER:" ,a);
    
}

for(let i =0;i< Array.length; i++){ // jitni bar currly braces , utni bar scope.
    const element=Array[i]
}


// console.log(a);
// console.log(b);   // here both a and b are not run bcz they are not outof the scope
// console.log(c);         // here when we print only c => it will run , because of var so that`s why not var variable.


function one(){             //nested function
    const username = " vidhi"

    function two(){
        const website = "netflix"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()


if(true){
    const username =" vidhi"
    if(username === " vidhi"){
        const website = "netflix"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// ************ intresting ***********
console.log(addone(5))
function addone(num){
    return num+1
}

addtwo(5) // this is hoisting , we cant access because here we declare function as a variable.

const addtwo = function(num){ // this called expression also, and JSON value .... // this is the another example of functions 
     return num+2

}