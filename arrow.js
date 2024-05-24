// Arrow function in Objects

const x = {
    name: "Sarthik",
    role: "JS developer",
    age: "23",
    exp: "5",
    show: function () {
        console.log(this)
        // using arrow function inside another function 'this' will get the details from its lexical parent. without arrow funcition 'this' will give us window object
        setTimeout(() => {
            console.log(`Hi, my name is ${this.name} and I am a ${this.role}`)
        }, 1000)
    }
}

x.show()
