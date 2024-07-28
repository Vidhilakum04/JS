const userEmail =" vidhi@.ai"

if(userEmail){
    // console.log("got");
}
else{
    console.log("not");
}

// falsy values::

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values::

//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("empty");
}

// Nullish Coalescing Operator (??) : null Undefined

let val1;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined??15
val1 = null ?? 10 ?? 14

console.log(val1);

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less") : console.log("more");