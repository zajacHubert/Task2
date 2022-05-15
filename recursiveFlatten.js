// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

function flatten(arr) {
    const res = [];

    arr.forEach(el => {
        if (Array.isArray(el)) {
            res.push(...flatten(el));
        } else {
            res.push(el);
        }
    });

    return res;
}

// console.log(flatten([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]));