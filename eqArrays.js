const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
};

const eqArrays = function(a, b){
    return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
};

assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true);