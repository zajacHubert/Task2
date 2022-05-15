// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

function tuplesFromTwoArrays(arr1, arr2) {
    return arr1.reduce(
        (prev, curr, i) =>
            arr2?.[i] ? [...prev, [curr, arr2?.[i]]] : prev, []
    );
}

// console.log(tuplesFromTwoArrays([1, 2, 3], [4, 5, 6, 7]));