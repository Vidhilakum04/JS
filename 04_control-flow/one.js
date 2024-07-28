// if

// if(true){  // true -> code exicute hoga , and visaversa

// }
// if(false){

// }

// const isUserLoggerIn = true
// const temp = 41
// if(temp === 50){
//     console.log("is high");

// }
// else{
//     console.log("too high");
// }
// console.log("execute");


// operators ::: <, >, <=, >=, ==, !=, === 

// const score = 200
// if (score>100){
//     const power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


// const balance = 1000         // immature code
// if (balance>500) console.log("test"),
// console.log("test2");

// if(balance < 500 ){

//     console.log("less than");

// }
// else if(balance < 750)
// {
//     console.log("less than 750");
// }
// else {
//     console.log("less than 1200");
// }

const isUserLoggerIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggerIn && debitCard && 2==3){
    console.log("allow");
}
if ( loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");

}