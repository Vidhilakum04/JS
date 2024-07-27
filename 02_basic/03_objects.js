// singleton // means-- koi bhi object banaviae ae pote j ek object bani jay
// exa. -- constructor thi banelo object singleton j hoi


// object-Literals
// exa of creating object--> Object.create

const mySym= Symbol("key1")

const JsUser={
    name: "vidhi",
    "full name": "vidhi lakum",
    [mySym]:"mykey", // syntax of use symbol
    age: 20,
    location:"jaipur",
    email:"vidhi@123.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// // console.log(JsUser."full name"); // gives us error .. so when we use object name in comma, we doesnt use with object(.).
// console.log(JsUser[mySym]);

JsUser.email="vidhi123@co.com"
// Object.freeze(JsUser)
JsUser.email="vidhi@1.com"
// console.log(JsUser);


JsUser.greeting= function(){
    console.log("hello");
}
JsUser.greetingTwo= function(){
    console.log(`hello, ${this.name}`); // its called string interpulation
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



