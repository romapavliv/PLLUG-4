// empty object 

let emptyObject = {};

// object without prototype

let objWithoutPrototype = Object.create(null);

// add keys to objects

emptyObject.key1 = 'value1';
emptyObject['key2'] = 'key2';

objWithoutPrototype.key1 = 'value1';
objWithoutPrototype['key2'] = 'key2';

// empty array

let emptyArray = [];

// empty array with 100500 elements :D

let array100500 = [];
array100500[0] = 'Hello', array100500[100499] = 'World';

// array with elements

let arrayWithElements = [1, 2, 3];

// converting array with elements to empty array

arrayWithElements = [];

// function to delete element by index

function deleteElementByIndex(arr3, index) {
    arr3.splice(index, 1);
    return arr3;
};

// function to check empty array

function emptyArrayChecker(arr4) {
    if (arr4.length == 0) return true;
    else return false;
}

// function to check empty object

function emptyObjectChecker(obj1) {
    if (Object.keys(obj1).length === 0) return true;
    else return false;
}

// function to concat arrays

function concatArrays(arrr1, arrr2) {
    return arrr1.concat(arrr2);
}

// function numbers pow in 3

function arrayInPow(arrNums) {
    let result = [];
    for (let i = 0; i < arrNums.length; i++) {
        result.push(arrNums[i] ** 3);
    }
    return result;
};

// function odd numbers 

function OddNumbers(array1) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] % 2 !== 0) result.push(array1[i]);
    }
    return result;
};

// function filter integers

function filterIntegers(ArNums) {
    return result = ArNums.filter(num => num === parseInt(num));
};

// function that returns nothing

function nothing(a, b, c) {
    a + b + c; // :)
};
















