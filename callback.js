// Ordering pizza fucntion using callback

function orderPizza(callback) {
    setTimeout(() => {
        const pizza = '🍕';
        callback(pizza);
    }, 2000)
}
function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`)
}
orderPizza(pizzaReady)
console.log(`Call dev`)


// Using callback for user input

function getUserInput(callback) {
    const name = prompt("Enter your name:");
    callback(name);
}

function greetUser(name) {
    console.log("Hello,", name + "!");
}

// Call getUserInput, passing greetUser as the callback
getUserInput(greetUser);

console.log("Waiting for your name..."); // This will be shown before the prompt
