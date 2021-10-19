// Object to Map function

let objToMap = obj => {
    let keys = Object.keys(obj);
    let map = new Map();
    for (let i = 0; i < keys.length; i++) {
        map.set(keys[i], obj[keys[i]]);
    };
    return map;
};

// Map to object function

let obj = Object.fromEntries(entries);