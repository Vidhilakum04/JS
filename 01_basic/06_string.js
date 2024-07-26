const name="vidhi"
const repoCount=50

// console.log(name+ repoCount+ " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// better than upper

const gameName = new String('vidhi-lakum')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,3) // last value is not added // also we can not add minus values in substring
console.log(newString);

const anothrString = gameName.slice(-8,4) // we can add minus values also, it start from behind to the string
console.log(anothrString);

const newString1= "     vidhi     "
console.log(newString1);
console.log(newString1.trim());

const url = "https://vidhi.com/vidhi%20lakum"

console.log(url.replace('%20', '-'))

console.log(url.includes('vidhi'));

console.log(gameName.split('-'));