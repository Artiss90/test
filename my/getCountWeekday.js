function getCountWeekday(date) {
  const DAY_IN_MS = 86400000;

  const givenDate = new Date(date);
  const now = new Date();
  const differenceInTime = now - givenDate;
  const countDay = Math.floor(differenceInTime / DAY_IN_MS);
  console.log('🚀 ~ file: getCountWeekday.js ~ line 7 ~ getCountWeekday ~ countDay', countDay);

  let countWeekday = 0;

  if (countDay > 0) {
    for (let week = 0; week * 7 < countDay; week++) {
      countWeekday += 1;
    }
  }
  if (countDay < 0) {
    for (let week = 0; week * 7 > countDay; week--) {
      countWeekday += 1;
    }
  }
  return countWeekday;
}

console.log(getCountWeekday('June 29, 2022'));
console.log(getCountWeekday('June 19, 2022'));
console.log(getCountWeekday('June 08, 2022'));
console.log(getCountWeekday('July 1, 2022'));
console.log(getCountWeekday('July 8, 2022'));
