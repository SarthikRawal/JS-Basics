// String creation (using quotes)
let message = "This is a string with spaces!";
console.log(message); // Output: This is a string with spaces!

// String length (number of characters)
const messageLength = message.length;
console.log("Length of the message:", messageLength); // Output: Length of the message: 28

// Extracting substrings with slicing
const firstFiveChars = message.slice(0, 5); // "This " (extracts from index 0 to 4 (not including 5))
const lastWord = message.slice(18); // "with spaces!" (extracts from index 18 to the end)
console.log("First five characters:", firstFiveChars); // Output: First five characters: This 
console.log("Last word:", lastWord); // Output: Last word: with spaces!

// Splitting a string into an array (based on separator)
const words = message.split(" "); // Splits on spaces
console.log("Words as an array:", words); // Output: Words as an array: ["This", "is", "a", "string", "with", "spaces!"]

// Accessing elements from the split array (like accessing characters in a string)
const secondWord = words[1]; // "is" (accessing the second element)
console.log("Second word:", secondWord);

// Combining slicing and splitting for specific parts
const lastTwoWords = message.slice(18).split(" "); // Split the last part after index 18
console.log("Last two words:", lastTwoWords); // Output: Last two words: ["with", "spaces!"]