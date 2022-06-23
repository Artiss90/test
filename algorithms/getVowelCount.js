function getVowelCount(str) {
  const VOWEL = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  const letters = str.split('');
  letters.forEach((letter) => {
    if (VOWEL.includes(letter)) {
      count += 1;
    }
  });
  return count;
}

// ! peeped solution
// ? RegEx
// ? 1
function getVowelCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// ? 2
function getVowelCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

// TODO Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

console.log(getVowelCount('abracadabra'));
console.log(getVowelCount('abracadabr'));
console.log(getVowelCount('abracadabry'));
