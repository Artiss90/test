function rowSumOddNumbers(n) {
  const TRIANGLE = [[1], [3, 5], [7, 9, 11], [13, 15, 17, 19], [21, 23, 25, 27, 29]];

  return TRIANGLE[n - 1].reduce((acc, value) => acc + value, 0);
}

// ?solution without constant triangle

function rowSumOddNumbers(n) {
  //    The rows' start numbers are Hogben's centered polygonal numbers:
  //  1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
  //  <https://oeis.org/A002061>

  //  The sum of one row is given by:
  //  s[n] = n^2 + n(b[n] - 1).
  //  <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>

  //  Inline b[n]:
  //  s[n] = n^2 + n(n^2 - n + 1 - 1)
  //       = n^2 + n(n^2 - n)
  //       = n^2 + n^3 - n^2
  //       = n^3
  //*  ... oh.
  return n * n * n;
}

// ?or this solution
function rowSumOddNumbers(n) {
  const out = Array.from({ length: (n * (n + 1)) / 2 }, (_, i) => i * 2 + 1);
  return out.slice(out.length - n).reduce((a, b) => a + b, 0);
}

// TODO Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

console.log(rowSumOddNumbers(1), rowSumOddNumbers(2), rowSumOddNumbers(3), rowSumOddNumbers(4));
