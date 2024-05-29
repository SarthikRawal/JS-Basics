// Async loops
// async function process(array) {
//     for await (let i of array) {
//         console.log(i);
//     }
// }
// process([2, 4, 6, 8])
// console.log(process);


// Object rest porperties for destructuring assignment
// let { fname, lname, ...rest } = { fname: "Hemanth", lname: "HM", location: "Earth", type: "Human" };
// console.log(fname, rest);

// Onject spread properties
// let info = { fname, lname, ...rest }
// console.log(info);

// Promise prototype finally
function testFinally() {
    return new Promise((resolve, reject) => resolve())
}
testFinally()
    .then(() => console.log("resolved"))
    .catch(() => console.log("rejected"))
    .finally(() => console.log("finally"))