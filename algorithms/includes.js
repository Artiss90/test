"use strict";

function includes(array, value) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === value) { return true };
        if (i === array.length - 1){return false}
    }
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
