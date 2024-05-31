// challenge 1
function sortIt(str) {
    return sortedStr = str.split("").sort().join("");
}
function repititiveChar(str) {
    let arr = str.split('')
    let letters = []
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++
        } else {
            let value = `${count}${arr[i]}`;
            letters = [...letters, value];
            count = 1
        }
    }
    return letters
}

object = "hey hello harish"
console.log(repititiveChar(sortIt(object)));


// Challenge 2

let str = "my name is sarthik rawal"

let newStr = str.split(" ");

const res = newStr.map((value) => {
    return value.charAt(0).toUpperCase() + value.slice(1)

})

console.log(res.join(" "));

// Challenge 3

let arr1 = [1, 4, 7, 8]
let arr2 = [2, 4, 6, 8, 10]

// let newArr = arr1.concat(arr2)

for (i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
}

const newArr = [...arr1, ...arr2]

console.log(newArr);
// console.log(arr1);


let obj = { a: 12, b: 15, c: 18 }
let { a, ...rest } = obj
console.log(rest);


// Challenge 4
const addCar = function (model, year) {
    console.log(`${this.name} has ${model} of year ${year}`)
}

let n1 = {
    name: "Sarthik"
}
let n2 = {
    name: "Saurabh"
}

addCar.call(n1, "Kia", 2020)

let newCar = addCar.bind(n2, "Honda", 2024)
console.log(newCar);
newCar()

// Challenge 5
// "asdh23 ncjf06 ncdc90 abc21f" find the summation of numbers present in each word of this string

const givenStr = "asdh23 ncjf06 ncdc90 abc21f";
const words = givenStr.split(' ');
console.log(words);
const result = words.map(word => {
    const numbers = word.split('')
        .filter(char => !isNaN(char) && char !== ' ').join('');
    // console.log(numbers);
    return parseInt(numbers, 10) || 0;
})
    .reduce((acc, num) => acc + num, 0);

console.log(result);
