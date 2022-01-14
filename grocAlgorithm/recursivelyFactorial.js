'use strict'

const recursivelyFactorial = x => {
    if (x === 1) return 1;
    return x * recursivelyFactorial(x - 1);
  };
  

  console.log(recursivelyFactorial(2));
  console.log(recursivelyFactorial(3));
  console.log(recursivelyFactorial(4));
  console.log(recursivelyFactorial(5));
  console.log(recursivelyFactorial(6));