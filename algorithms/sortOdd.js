function sortArray(array) {
  const sortArrayOdd = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  const sortArrayOnlyOdd = array.map((num) => {
    if (num % 2 === 0) {
      return num;
    }
    const minOdd = sortArrayOdd.shift();
    return minOdd;
  });
  return sortArrayOnlyOdd;
}

// Task
// TODO You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// ?Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// [-29, -32, -10, -19, -48, 20, 6, 50, -21, -31, -9, -17, 37] => [-31, -32, -10, -29, -48, 20, 6, 50, -21, -19, -17, -9, 37];

// console.log(sortArray([]));
// console.log(sortArray([7, 1]));
// console.log(sortArray([5, 8, 6, 3, 4]));
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortArray([-31, -32, -10, -29, -48, 20, 6, 50, -21, -19, -17, -9, 37]));
