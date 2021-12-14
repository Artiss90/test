'use strict'

function twoSum(numbers, target) {
    let indexSum = []
// ? перебираем массив чисел
    numbers.forEach( (item, currentIndex) => {
// ? больше 2-х подходящих значений не записуем       
      if(indexSum.length === 2){
        return
      }
// ? вычисляем остаток      
      const rest = target - item
// ? ищем от текущего индекса (не включая его)     
      const indexOf = numbers.indexOf(rest, currentIndex + 1)
 // ? число найдено запишем текущий индекс и индекс найденного числа       
      if(indexOf !== -1) {
        indexSum.push(currentIndex)
        indexSum.push(indexOf)
      }
    })

   return indexSum
}

console.log(twoSum([1,2,3], 4) + "\n/ [0,2]")
console.log(twoSum([1234,5678,9012], 14690) + "\n/ [1,2]")
console.log(twoSum([2,2,3,1], 4) + "\n/ [0,1]")
console.log(twoSum([750, 269, 976, 729, 955, 248, 645, 633, 348, 908], 1224) + "\n/ [1,4]")


// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).