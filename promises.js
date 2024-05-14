// Getting weather example
function getWeather() {
    return new Promise(function (resolve, reject) {
        resolve('Sunny')
    })
}
function onSuccess(data) {
    console.log(`Success ${data}`)
}
function onError(error) {
    console.log(`Error: ${error}`)
}
getWeather().then(onSuccess, onError)



// Odering a pizza!

function orderPizza(flavor) {
    return new Promise((resolve, reject) => {
        // Simulate making the pizza (asynchronous operation)
        setTimeout(() => {
            const possibleErrors = ["No dough!", "Out of cheese!"];
            const randomNumber = Math.random(); // Generate random number

            if (randomNumber > 0.25) { // Only reject 25% of the time
                reject(possibleErrors[Math.floor(Math.random() * possibleErrors.length)]);
            } else {
                const pizza = `Here's your delicious ${flavor} pizza!`;
                resolve(pizza);
            }
        }, 2000); // Simulate waiting time (2 seconds)
    });
}

// Order a pizza with a higher chance of success
orderPizza("Pepperoni")
    .then((pizza) => {
        console.log(pizza); // Enjoy the pizza (more likely now)
    })
    .catch((error) => {
        console.error("Error:", error); // Handle errors (if any)
    });