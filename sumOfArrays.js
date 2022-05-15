// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

function sumOfArrays(arr) {
    return arr.reduce((prev, curr) => prev + curr, 0);
}

// console.log(sumOfArrays([9, 1, 22, 0, 2]));