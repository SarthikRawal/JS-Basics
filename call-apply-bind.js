let printFullName = function (hometown, state) {
    console.log(`${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
}
let name1 = {
    firstName: "sarthik",
    lastName: "rawal",
}
let name2 = {
    firstName: "saurabh",
    lastName: "bissa",
}

// Function borrowing

// CALL
printFullName.call(name1, "Jodhpur", "Rajasthan")

// APPLY
printFullName.apply(name2, ["Mumbai", "Maharashtra"])

// BIND
let printMyName = printFullName.bind(name1, "Jodhpur", "Rajasthan")
console.log(printMyName);
printMyName();
