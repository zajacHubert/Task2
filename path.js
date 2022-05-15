// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

function path(path, obj) {
    return path.reduce((prev, curr) => prev?.[curr] ?? undefined, obj);
}

// console.log(path(['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }));