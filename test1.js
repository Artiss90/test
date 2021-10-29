"use strict";

function includes(array, value) {
  // Change code below this line
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === value) { return true };
        if (i === array.length - 1){return false}
    }
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
