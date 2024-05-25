// String creation (using quotes)
let message = "This is a string with spaces!";
console.log(message);

// String length (number of characters)
const messageLength = message.length;
console.log("Length of the message:", messageLength);

// Extracting substrings with slicing
const firstFiveChars = message.slice(0, 5);
const lastWord = message.slice(18);
console.log("First five characters:", firstFiveChars);
console.log("Last word:", lastWord);

// Splitting a string into an array (based on separator)
const words = message.split(" "); // Splits on spaces
console.log("Words as an array:", words);

// Accessing elements from the split array (like accessing characters in a string)
const secondWord = words[1];
console.log("Second word:", secondWord);

// Combining slicing and splitting for specific parts
const lastTwoWords = message.slice(18).split(" "); // Split the last part after index 18
console.log("Last two words:", lastTwoWords); 