// Async, await

function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: userId,
                name: `User ${userId}`,
            };
            resolve(user); // Resolve the promise with user data
        }, 1000); // Simulate asynchronous data fetching
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = [
                { userId, title: "Post 1" },
                { userId, title: "Post 2" },
            ];
            resolve(posts); // Resolve the promise with posts data
        }, 500); // Simulate asynchronous data fetching
    });
}

// // Using then for chaining promises
// getUserData(123)
//     .then((user) => {
//         console.log("User:", user);
//         return getPosts(user.id); // Return another promise
//     })
//     .then((posts) => {
//         console.log("Posts:", posts);
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });

// Using async await over promise with .then
async function fetchData(userId) {
    try {
        const user = await getUserData(userId);
        console.log("User:", user);
        const posts = await getPosts(user.id);
        console.log("Posts:", posts);
    } catch (error) {
        console.error("Error:", error);
    }
}
fetchData(123);


// Object.values()

const exampleObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.values(exampleObj));
// before ES8 
// const values = Object.keys(exampleObj).map(key => exampleObj[key]);


// Object Entries
const exampleObj2 = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.entries(exampleObj2));

// Usually used with 'for'
// for (const [key, value] of Object.entries(exampleObj2)) {
//     console.log(`key: ${key}, value: ${value}`);
// }



// String padStart() & padEnd()
padStart()
const name = "rawal".padStart(12, "sarthik")
console.log(name);
// padEnd()
const total = '100'.padEnd(5, 99)
console.log(total);



// Object.getOwnPropertyDescriptors() 
const example = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.getOwnPropertyDescriptors(example));


