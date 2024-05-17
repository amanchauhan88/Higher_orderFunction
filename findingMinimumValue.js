
const numbers = [5, 3, 8, 1, 2];

function findMinimum(arr) {
    return arr.reduce((min, ele) => (ele < min ? ele : min), 99999);
}

// Example usage:
const minValue = findMinimum(numbers);

console.log(minValue); 
