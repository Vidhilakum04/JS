// switch(key){
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("jan");
    break;
    case 2:
        console.log("fab");
    break;          // jb ye break na ho to uske niche ka sara code match nhi karta , sab print kr deta hai , except default.
    case 3:
        console.log("mar");
    break;
    default:
        console.log("default");
        break;
}