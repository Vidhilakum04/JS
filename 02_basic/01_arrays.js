const myArray = [0, 1,2 , 3, 4]
const myHeros =["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArray[1]);

// Array Methods:::

myArr2.push(6)
myArr2.pop()
// console.log(myArr2);

// myArr2.unshift(9)
myArr2.shift(9)

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(19));

const newArr = myArr2.join()
// console.log(myArr);
// console.log(newArr);
// console.log(myArr2);


//slice, splice

console.log("A", myArr2);

const myn1 = myArr2.slice(1,3)

console.log(myn1);
console.log("B", myArr2);

const myn2=myArr2.splice(1,3)
console.log("C", myArr2);
console.log(myn2);