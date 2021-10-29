"use strict";

function isPangram(string) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  let pangram = true

  const letterPhrase = string.toLowerCase().match(/[a-z]/g)

  alphabet.forEach(item => {
      if (!letterPhrase.includes(item)){
        pangram = false
      }
      
  });

  return pangram
}

// return s.match(/[^a-m]/g).length + "/" + s.length; // решение в одну строку

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))