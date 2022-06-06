function past(h, m, s) {
  // Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)
  const unixDate = new Date(0);
  const timeZone = unixDate.getTimezoneOffset() / 60;

  return unixDate.setHours(h - timeZone, m, s);
}

// function past(h, m, s) {
//   const setTime = new Date().setHours(h, m, s);
//   const midnight = new Date().setHours(0, 0, 0);

//   return Math.round(setTime - midnight);
// }

// function past(h, m, s) {
//   const hours = h * 60 * 60 * 1000;
//   const minutes = m * 60 * 1000;
//   const seconds = s * 1000;

//   return hours + minutes + seconds;
// }

// *Clock shows h hours, m minutes and s seconds after midnight.
// TODO Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

console.log(past(0, 1, 1), past(1, 1, 1), past(0, 0, 1), past(2, 0, 0), past(0, 0, 0));
