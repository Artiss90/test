'use strict'

function moveZeros(arr) {
  const withoutZero = [];
  const zero = [];
  arr.forEach( item => {
    item === 0 ? zero.push(item) : withoutZero.push(item)
  })
  const result = withoutZero.concat(zero)
  return result
}


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]

