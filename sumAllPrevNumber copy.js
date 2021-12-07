'use strict'

function twistedSum(n) {
  let stringNumbers ="";
  for (let prevNumber = n; prevNumber > 0; prevNumber -= 1){
    stringNumbers += prevNumber
  }
  const numbers = stringNumbers.split('')
  const sum = numbers.reduce((acc, value)=>{
    acc += Number(value)
    return acc
  }, 0)
  return sum;
}


console.log(twistedSum(4)) // 1 + 2 + 3 + 4 = 10
console.log(twistedSum(10)) // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
console.log(twistedSum(12)) // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
