// Classes

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    toString() {
        console.log(`name: ${this.name}, color: ${this.color}`);
    }
}

let animal = new Animal('myDog', 'Black'); // instantiate
animal.toString();

console.log(animal.hasOwnProperty('name'));

// Arrow function

const add = (a, b) => { return a + b };
const res = add(1, 2);

const minus = (a, b) => a - b;
const res1 = minus(3, 1);
console.log(res, res1);

// Function parameter Default value

function example(height = 50, width = 40) {
    const newH = height * 10;
    const newW = width * 10;
    return newH + newW;
}

console.log(example());

// Template literal

const firstName = "Sarthik"
const lastName = "Rawal"

console.log(`Hello, my name is ${firstName} ${lastName}`);

// Destructuring assignment

const arr = [2, 4, 6, 8, 10]
const [two, four, six] = arr
console.log(two);

const [first, , , , last] = arr
console.log(first, last);

// Spread Operator

const students = ['sarthik', 'saurabh']
const people = ['sara', ...students, 'rohan', 'harry']
console.log(people);

// Object oriented shorthand
const name = 'sarthik', age = 23, city = "Bengaluru"

const newCust = {
    name,
    age,
    city
}

// Before ES6
// const newCust = {
//     name: name,
//     age: age,
//     city: city
// }

console.log(newCust);

// Promises were introduced to avoid callback hell

const waitSecond = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
});
waitSecond.then(() => {
    console.log('Hello world after 1 sec');
    return waitSecond;
}).then(() => {
    console.log('Hello world after 2 sec');
})