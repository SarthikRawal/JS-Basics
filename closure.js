// Example 1
// message = "Good Global"
function hello1() {
    let message = "Good Morning"
    console.log("Hello 1: " + message)
    let c = function hello2() {
        console.log("I am C: " + message)
    }
    return c;
}

c = hello1()
c()

// Example 2: Nested functions also creats closures

function returnFunc() {
    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            // let a = 2
            console.log(a)
            const z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a = 99
        y()
    }
    return x
}

let a = returnFunc()
a()