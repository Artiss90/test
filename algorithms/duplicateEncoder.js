//*  solution Time: 826ms
function duplicateEncoder(word) {
  const characters = word.toLowerCase().split('');
  const encoderCharacters = characters.map((character) => {
    const countCharacters = characters.filter((item) => item === character);
    return countCharacters.length > 1 ? ')' : '(';
  });
  return encoderCharacters.join('');
}

// ? alternative
// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split('')
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
//     })
//     .join('');
// }

//* solution Time: 890ms
// function duplicateEncoder(word) {
//   const characters = word.toLowerCase().split('');
//   const copyCharacters = [...characters];
//   let checkedCharacters = [];
//   const encoderCharacters = characters.map((character) => {
//     copyCharacters.shift();
//     if (!checkedCharacters.includes(character)) {
//       checkedCharacters.push(character);
//       if (copyCharacters.includes(character)) {
//         return ')';
//       }
//       return '(';
//     }
//     return ')';
//   });
//   return encoderCharacters.join('');
// }

//* solution Time: 1012ms
// function duplicateEncoder(word) {
//   const characters = word.toLowerCase().split('');
//   const lengthString = word.length;
//   const checkedCharacters = [];
//   const encoderCharacters = [];
//   for (let i = 0; i < lengthString; i += 1) {
//     const currentCharacter = characters.pop();
//     if (!characters.includes(currentCharacter) && !checkedCharacters.includes(currentCharacter)) {
//       encoderCharacters.push('(');
//       continue;
//     }
//     if (!checkedCharacters.includes(currentCharacter)) {
//       checkedCharacters.push(currentCharacter);
//     }
//     encoderCharacters.push(')');
//   }
//   return encoderCharacters.reverse().join('');
// }

// ? The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// ? Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// ? Notes
// *Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

console.log('🚀 ~ 1', duplicateEncoder('din'));
console.log('🚀 ~ 2', duplicateEncoder('recede'));
console.log('🚀 ~ 3', duplicateEncoder('Success'));
console.log('🚀 ~ 4', duplicateEncoder('(( @'));
