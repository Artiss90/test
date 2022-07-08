function solution(string) {
  const getLowerCase = string.toLowerCase();
  const letters = string.split('');

  return letters.reduce((acc, letter, index) => {
    //   if upper
    if (letter !== getLowerCase[index]) {
      acc += ' ';
    }
    acc += letter;
    return acc;
  }, '');
}

// * more simple solution
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el;
    }
    return el;
  });
  return string.join('');
}

// TODO Complete the solution so that the function will break up camel casing, using a space between words.

//? Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

console.log(solution('camelCasing'));
console.log(solution('identifier'));
console.log(solution(''));
