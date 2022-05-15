// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

function differentElementsOfTwoArrays(arr1, arr2) {
    return arr1
        .filter(el => !arr2.includes(el))
        .concat(arr2.filter(el => !arr1.includes(el)));
}

// console.log(differentElementsOfTwoArrays(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']));