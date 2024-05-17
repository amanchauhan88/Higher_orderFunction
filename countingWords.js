const inputString = "Hello, World";

function countWords(str) {
    const words = str.trim().split(/\s+/);
    
    return words.length;
}

console.log("Number of words:", countWords(inputString)); // Output: 6
