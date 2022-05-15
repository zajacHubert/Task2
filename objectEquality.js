// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

function objectEquality(obj1, obj2) {
    const flat1 = Object.entries(obj1).flat(Infinity).sort();
    const flat2 = Object.entries(obj2).flat(Infinity).sort();

    return (
        flat1.length === flat2.length &&
        flat1.every((value, index) => value === flat2[index])
    );
}

console.log(objectEquality({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }));
console.log(objectEquality({ a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }));
