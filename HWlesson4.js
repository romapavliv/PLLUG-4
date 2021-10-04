// camelcase function

function CamelCase(arr) {
    let result = [];
    for (let element of arr) {
        if (typeof element === 'string') {
            result.push(element);
        }
    }
    let first = result.shift();

    return result.map(el => el.charAt(0).toUpperCase() + el.substr(1)).join('');
};

// alphabet number function

function alphabet(arr1) {
    let res = '';
    for (let i = 0; i < arr1.length; i++) {
        res += String.fromCodePoint(96 + arr1[i]);
    }
    return res.split('');
}

// function object positive negative number filter

function sort(obj) {
    let res = {};
    for (let key in obj) {
        if (obj[key] >= 0) {
            res[key] = obj[key];
        }
    }
    return res;
}



