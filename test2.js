"use strict";

function printerError(s) {
  const availableCodeColor = ["a","b","c","d","e","f","g","h","i","j","k","l","m"];

  let errors = 0

  const arrCode = s.split('')

  arrCode.forEach(item => {
      if (!availableCodeColor.includes(item)){
          errors += 1
      }
      
  });

  return `${errors}/${s.length}`
}

// return s.match(/[^a-m]/g).length + "/" + s.length; // решение в одну строку

console.log(printerError('aabacdfffggab'))
console.log(printerError('aabafgshhww'))