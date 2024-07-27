const marvel_heros= ["thor","spiderman", "ironman"]
const dc_heros= ["superman", "flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros=[...marvel_heros, ...dc_heros] // concat na bija example ma aa use kri sakay
// console.log(all_new_heros);

const another_array=[1,2,3,4,5,[4,5,6,],[2,3]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("vidhi"))
console.log(Array.from("vidhi"))
console.log(Array.from({name:"vidhi"})) // shows empty array

let score1 = 100
let score2=200

console.log(Array.of(score1, score2)); // returns new array from set of array



