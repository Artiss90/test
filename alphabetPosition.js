"use strict";

function alphabetPosition(text) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  const arrLetters = text.toLowerCase().split('')
  const arrPosition = arrLetters.reduce( (acc, value) => {
    
  const index = alphabet.join('').indexOf(value) 
    if (index !== -1){ 
        acc.push(index + 1) // position = index + 1
    }
    return acc
  }, [])
  const convertInString =  arrPosition.join(" ")
  return convertInString
}


console.log(alphabetPosition('a a b.a'))
console.log(alphabetPosition('aab.a'))