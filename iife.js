// Simple IIFE

// It is a named IIFE 
(function db() {
    console.log("DB connected");
})();

// IIFE with arrow syntax/simple IIFE
(() => {
    console.log("DB is connected again");
})();

// simple IIFE with parameter 
((name) => {
    console.log(`Hey ${name}`);
})('Sarthik');