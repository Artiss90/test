function countSmileys(arr) {
  let countSmile = 0;
  if (arr.length === 0) {
    return countSmile;
  }
  arr.forEach((face) => {
    if (face.length < 2 || face.length > 3) {
      return;
    }

    //  check nose (it does not have to)
    let haveNose = false;
    if (face.length === 3) {
      haveNose = face[1] === '-' || face[1] === '~';
      if (!haveNose) {
        return;
      }
    }

    // check eyes (must have)
    let havePairEyes = false;
    havePairEyes = face[0] === ':' || face[0] === ';';
    if (!havePairEyes) {
      return;
    }

    // check eyes (must have)
    let haveSmiling = false;
    const smiling = haveNose ? face[2] : face[1];

    haveSmiling = smiling === ')' || smiling === 'D';
    if (!haveSmiling) {
      return;
    }
    // all check which must have are success
    countSmile += 1;
  });

  return countSmile;
}

// ! peeped solution
// ? RegEx
// ? 1
const countSmileys = (arr) => arr.filter((s) => s.match(/((:|;)(~|-){0,1}(\)|D))/)).length;

// ? 2
const smileyRegEx = new RegExp(/[:;][-~]?[)D]/);
const isSmiley = (s) => smileyRegEx.test(s);
const countSmileys = (a) => a.filter(isSmiley).length;

// ? 3
function countSmileys(arr) {
  return arr.reduce((n, s) => (/^[:;][-~]?[)D]$/.test(s) ? n + 1 : n), 0);
}

// ? 4
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

// TODO Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// ? Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// * Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// ? Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

console.log(countSmileys([]));
console.log(countSmileys(['D']));
console.log(countSmileys([':--D']));
console.log(countSmileys([':D', ':~)', ';~D', ':)']));
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
