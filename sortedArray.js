const numbers = [5, 3, 8, 1, 2];

function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}

const sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers);
