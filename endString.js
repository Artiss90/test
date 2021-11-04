'use strict'

function solution(str, ending){
    // return str.endsWith(ending) // ? решения с помощью метода 

 const endingLength = ending.length;
 if (endingLength === 0){
    return true}

 const endingStr = str.slice(endingLength * -1);
 const isEndString = endingStr === ending;



 return isEndString
  }




console.log( solution('abcde', 'cde'));// true
console.log(solution('abcde', 'abc'));// false
console.log(solution('sometime', 'some'));// false
console.log(solution('sometime', 'time'));// true
console.log(solution('sometime', ''));// true
 