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