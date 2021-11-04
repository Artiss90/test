'use strict'

function highAndLow(numbers){
  const stringToNumbers = numbers.split(' ').reduce((acc, value) => {
    // acc.push(Number(value)) // *или так
    acc = [...acc, value]
    
    return acc
  }, [])  

  const min = Math.min(...stringToNumbers);
  const max = Math.max(...stringToNumbers)

  return (`${max} ${min}`)
  }

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"  