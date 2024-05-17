

const inputString = "Hello World";

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    const lowerStr = str.toLowerCase();
    
    const vowelChars = lowerStr.split('').filter(function(ele){
        return vowels.includes(ele);

    });
    console.log(vowelChars)
    return vowelChars.length;

}

console.log("Number of vowels:", countVowels(inputString)); 
