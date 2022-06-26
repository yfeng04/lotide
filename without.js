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

const without = function(source, itemsToRemove){
    let hasCommonItems = itemsToRemove.some(item => source.includes(item));
    
    if (hasCommonItems){
        return source.filter(item => !itemsToRemove.includes(item));
    } else {
        return source;
    };
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
