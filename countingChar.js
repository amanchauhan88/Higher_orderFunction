function countCharacters(str) {
    const charCount = {};

    str.split('').forEach(char => {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    });

    return charCount;
}

const inputString = "Hello World";
console.log("Character counts:", countCharacters(inputString));
