"use strict";

function binarySearch(arr, query) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while ( startIndex <= endIndex){
        let mid = Math.floor((startIndex + endIndex) / 2);
        const guess = arr[mid];
        if(guess === query){
            return guess
        }
        if(guess > query){
            endIndex = mid - 1
        }
        if(guess < query){
            startIndex = mid + 1
        }
    }
    return null
} 


console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 7));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 8));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], -1));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 15));
// console.log(([1, 2, 3, 4, 5].find()));
