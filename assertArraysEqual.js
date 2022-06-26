const assertArraysEqual = function(a, b){
    if (Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])) {
        console.log(`✅Assertion Passed: ${a} === ${b}`);
    } else {
        console.log(`🛑Assertion Failed: ${a} !== ${b}`);
    };
};

assertArraysEqual([1,2,"3"], [1,2,3]);
