// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

function commonElemenstOfTwoArrays(arr1, arr2) {
    return arr1.filter(el1 => arr2.includes(el1));
}

// console.log(commonElemenstOfTwoArrays(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']));