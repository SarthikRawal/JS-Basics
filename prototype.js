let user = {
    language: "JavaScript",
    run: () => {
        console.log("Self run..!");
    }
}
console.log(user);

let p = {
    run: () => {
        console.log("Run..");
    }
}

p.__proto__ = {
    name: "Rohan"
}

user.__proto__ = p
user.run()

console.log(user.name);
