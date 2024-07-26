// primitive::

// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score=100//String
const scoreValue=100.3 // Number
const isLoggeedIn=false // Boolean
const outsideTemp=null//Null
let userEmail;//undefined

const id=Symbol('123')//Symbol
const anotherId=Symbol('123')
console.log(id === anotherId);

const bigNumber = 12345676789123456789n //BigInt


// Reference ( Non Primitive)::

// Arrays, Objects, Functions

const heros=["shaktiman", "doga"] // Array

let myObj={           // Object
    name:"vidhi",
    age:20,
}


const myFunction=function(){

    console.log("hello world!");

}

console.log(typeof myFunction);



/*************** Memory ***************/

// Stack (Primitive) and Heap (Non-Primitive) Memory

let myYoutubename = " vidhi"

let anothername = myYoutubename
 anothername= " lakum"

 console.log(anothername);
 console.log(myYoutubename);

 let userOne ={
    email: "user@google.com",
    upi:"user@vl"
 }

 let userTwo=userOne

 userTwo.email = "vidhi@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);