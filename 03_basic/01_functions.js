function sayMyName(){
    console.log("v");
    console.log("v");
    console.log("v");
    console.log("v");
    console.log("v");

}
// sayMyName()

function addtwoNumbers(number1, number2){
            // this are parameters
// console.log( number1+ number2);

// let result= number1 + number2
// return result
// console.log("vidhi");

// let result= number1 + number2
// console.log("vidhi");
// return result

return number1+ number2
}
addtwoNumbers(3,2)          // this are arguments

const result = addtwoNumbers(3, "a")
// console.log("result:", result);


function loginUserMessage(username = "sam"){

    if(!username){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("vidhi"))

// console.log(loginUserMessage("vidhi"));


function calculatecartPrice(val1, val2,...num1){

    return num1

}
console.log(calculatecartPrice(200, 400, 500));

const user={
    username: ' vidhi',
    price: 50
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200, 300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400]));



