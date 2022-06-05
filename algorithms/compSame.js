'use strict'

function compSame(array1, array2) {

  if (!Array.isArray(array1) || !Array.isArray(array2)){
    return false
  }
  if (array1.length === 0 && array2.length === 0) { // =_=  
    return true
  }
  if (array1.length === 0) {
    return false
  }
  if (array2.length === 0) {
    return false
  }
 const arr1 = [...array1]
 const arr2 = [...array2]

 const resultArray = arr1.every(item => {
   return arr2.some(itemSquare => {
     const isFind = itemSquare === (item*item)
     if(isFind){
       const index = arr2.indexOf(itemSquare)
       arr2.splice(index, 1)
     }
     return isFind
    })
  })

  return resultArray
}


const a = [121, 144, 19, 161, 19, 144, 19, 11]
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
const c = [131, 14641, 20736, 361, 25921, 361, 20736, 361]
const d = [5, 7, 5, 8, 5, 0, 9, 4, 9, 7]
const f = [81, 16, 0, 25, 50, 81, 25, 25, 64, 49]
const e = [6, 1, 0, 10, 2, 8, 10, 7, 2, 1, 4, 2, 3, 0, 0, 8]
const g = [1, 1, 100, 36, 1, 0, 64, 49, 4, 64, 100, 4, 9, 4, 16, 0]

console.log(compSame(a, b)) // true
console.log(compSame(a, c)) // false
console.log(compSame([], b)) // false
console.log(compSame(a, [])) // false
console.log(compSame({}, b)) // false
console.log(compSame(a, {})) // false
console.log(compSame(d, f)) // false
console.log(compSame(e, g)) // false
console.log(compSame([], [])) // false

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// * Valid arrays
// * a = [121, 144, 19, 161, 19, 144, 19, 11]  
// * b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// ! Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// ! a = [121, 144, 19, 161, 19, 144, 19, 11]  
// ! b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// ? Замечания
// a или b может быть [] or {}(все языки, кроме R, Shell).
// a или b может быть nil или null или None или nothing(кроме C ++, Crystal, D, Dart, Elixir, Fortran, F #, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// Если a или b есть nil(или null или None, в зависимости от языка), проблема не имеет смысла, поэтому верните false.

// Примечание для C
// Два массива имеют одинаковый размер, (> 0)заданный как параметр в функции comp.