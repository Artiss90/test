function duplicateCount(text) {
  const letters = text.toLowerCase().split('');
  const countLetters = letters.reduce((acc, value) => {
    if (!acc[value]) {
      acc[value] = 0;
    }
    acc[value] += 1;
    return acc;
  }, {});

  let count = 0;
  for (let symbol in countLetters) {
    if (countLetters[symbol] > 1) {
      count += 1;
    }
  }

  return count;
}

// ! peeped solution
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
// ? regex
function duplicateCount(s) {
  return (
    s
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([a-z])\1+/g) || []
  ).length;
}

const duplicateCount = (text) => (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length;

// *Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// *Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

console.log(duplicateCount(''));
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('Indivisibility'));
console.log(duplicateCount('aA11'));
console.log(duplicateCount('ABBA'));
