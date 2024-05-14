// Everything about function JavaScript has to offer 

function greet() {
    console.log("Hello from JavaScript!");
}

greet(); // Call the function to display the message

function greetWithName(name) {
    console.log(`Hello, ${name}!`);
}

greetWithName("Alice"); // Call with argument "Alice"
greetWithName("Bob"); // Call with argument "Bob"


function calculateArea(length, width) {
    const area = length * width;
    return area;
}

const rectangleArea = calculateArea(5, 3); // Call and store the returned value
console.log(`Area of rectangle: ${rectangleArea}`);


const square = (number) => number * number;

const result = square(4); // Call the function and store the result
console.log(`Square of 4: ${result}`);


// Higher order function
function createGreeter(greeting) {
    return (name) => console.log(`${greeting}, ${name}!`);
}

const morningGreet = createGreeter("Good Morning");
const eveningGreet = createGreeter("Good Evening");

morningGreet("Emily");
eveningGreet("Alex");