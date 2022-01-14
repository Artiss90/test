"use strict";

const createArr = ( n ) => Array.from({length: n}, (item, index) => index + 1);

const arrExample = createArr(100)

function binarySearchRecursively(arr, query, startIndex = 0, endIndex = arr.length - 1) {
    if ( startIndex > endIndex){
        return null
    }

    const mid = Math.floor((startIndex + endIndex) / 2);
    const guess = arr[mid];

    if(guess === query){
        return guess
    }
    if(guess > query){
        endIndex = mid - 1
        return binarySearchRecursively(arr, query, startIndex, endIndex)
    }
    if(guess < query){
        startIndex = mid + 1
        return binarySearchRecursively(arr, query, startIndex, endIndex)
    }
} 


console.log(binarySearchRecursively(arrExample, 7));
console.log(binarySearchRecursively(arrExample, 8));
console.log(binarySearchRecursively(arrExample, 6));
console.log(binarySearchRecursively(arrExample, 4));
console.log(binarySearchRecursively(arrExample, -1));
console.log(binarySearchRecursively(arrExample, 105));
// console.log(([1, 2, 3, 4, 5].find()));
