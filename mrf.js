let arr = [23, 43, 56]
// console.log(arr);

// MAP
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + index
})
console.log(a)

// FILTER
let arr2 = [23, 12, 0, 5, 3, 8]
let a2 = arr2.filter((a) => {
    return a < 10
})
console.log(a2);

// REDUCE
let arr3 = [1, 4, 6, 2, 3, 9]
const reduceFunc = (h1, h2) => {
    return h1 + h2;
}
let a3 = arr3.reduce(reduceFunc)
console.log(a3);