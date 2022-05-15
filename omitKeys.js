// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

function omitKeys(keyList, obj) {
    const entries = Object.entries(obj);
    const filtered = entries.filter(entry => !keyList.includes(entry[0]));
    return Object.fromEntries(filtered);
}

// console.log(omitKeys(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }));