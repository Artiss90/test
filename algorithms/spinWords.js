'use strict'
// Stop gninnipS My sdroW!

function spinWords(s) {
   // ? Разбиваем фразу по словам отделяемых пробелом. Перебираем массив слов оставляя слова с длиной меньше 5 без изменений, остальные же переворачиваем. В конце соединяем массив в строку
   return s.split(' ').map( item => item.length < 5 ? item : item.split('').reverse().join('')).join(' ')
}

console.log(spinWords("Welcome"), "\n/ emocleW")
console.log(spinWords("Hey fellow warriors"), "\n/ Hey wollef sroirraw")
console.log(spinWords("Just kidding there is still one more"), " \n/ Just gniddik ereht is llits one more")
console.log(spinWords("Seriously this is the last one"), " \n/ ylsuoireS this is the last one")


// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"