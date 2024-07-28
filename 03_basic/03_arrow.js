const user = {
    username:'vidhi',
    price:999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);  
   }

}
// user.welcomeMessage()
// user.username="sam"      // this is context
// user.welcomeMessage()

console.log(this);

// function chai (){
//     let username="vidhi"
//     console.log(this.username); // we cant use this in function
// }
// chai()

// const chai = function(){
//     let username="vidhi"
//     console.log(this.username); 
// }

const chai = ()=>{
    let username="vidhi"
    console.log(this); 
}


// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

// const addtwo=(num1,num2)=> num1+num2   // implicit return

// const addtwo=(num1,num2)=> (num1+num2)      // jb paranthesis lagaye to return likhna padega

const addtwo=(num1,num2)=>( {username:"vidhi"} )     // jb paranthesis lagaye to return likhna padega


console.log((addtwo(3,4)));
 