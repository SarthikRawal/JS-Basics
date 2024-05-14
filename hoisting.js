helloWorld();

function helloWorld() {
    console.log("Hello World")
}
/* 
    lexicalEnvironment = {
        helloWorld: < func >
    }
    declaration was stored execution in the lexical environment
*/

console.log(n);
var n = 5;  // output undefined

let a;
console.log(a); // outputs undefined
a = 5;

console.log(b);
let b = 5; // ReferenceError: a is not defined

// Hoisting class declaration

let peter = new Person('Peter', 25); // ReferenceError: Person is not defined

console.log(peter);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Correct code
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let harry = new Person("Harry", 23)
console.log(harry)