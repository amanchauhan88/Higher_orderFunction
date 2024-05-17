const numbers = [1, 2, 2, 3, 4, 4, 5];

function getUniqueElements(arr) {
    return [...new Set(arr)];
}

const uniqueNumbers = getUniqueElements(numbers);

console.log(uniqueNumbers); 
