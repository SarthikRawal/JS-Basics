let arr1 = [2, 4, 6, 8]
let arr2 = [2, 4, 6, 8, 10]

// Destructring array
let [a, b, c] = arr1
let [z, ...rest] = arr1
console.log(a, b, c, z, rest);

const newArr = [...arr1, ...arr2]
console.log(newArr);


// Destructuring objects
const obj = { name: "sarthik", age: 23 }

let { name, age } = obj
console.log(`I am ${name} and I am ${age} years old`);


let obj2 = { x: 12, y: 15, z: 18 }
let { x, ...rest1 } = obj
console.log(rest1);