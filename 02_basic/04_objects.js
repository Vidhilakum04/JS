//const tinderUser = new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sunny"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser = {
    email:"sonal@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vidhi",
            lastname:"lakum",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// console.log(regularUser.fullname?.userfullname.firstname);
//if we have this ? sign ==> then we get as similar as to the if-else use

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

//cosnt obj3={onj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) // {} ==> use as a target for empty object , then we get output in empty object , its not compulsory , but better than without{}.

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"vidhi@.com"
    },{
    id:1,
    email:"vidhi@.com"
},
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggerIn'));


// ******** De - Structuring *******

const course = {
    coursename :" js in hindi",
    price:"999",
    courseInstructor:"vidhi"
}

// course.courseInstructor

const{courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);

//******
// const navbar = ({company}) =>{ // how to de-structure objects
    
// }
// navbar(company = "vidhi")

// {
//     "name": ' vidhi',        // **** its JSON syntax *****
//     "courseName": "js ",
//     "price":"free"

// }

 [   //*** also JSON format ******/
    {},
    {},
    {}
 ]


