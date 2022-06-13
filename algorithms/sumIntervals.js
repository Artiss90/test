function sumIntervals(interspace) {
  function getMergeInterval(intervals) {
    if (intervals.length < 2) {
      return intervals;
    }

    const sortIntervals = intervals.sort((a, b) => a[0] - b[0]);

    return sortIntervals.reduce((acc, [start, end]) => {
      if (acc.length === 0) {
        acc[0] = [start, end];
        return acc;
      }

      const lastIndexAcc = acc.length - 1;
      const nextIndexAcc = acc.length;
      const endLastInterval = acc[lastIndexAcc][1];
      const startLastInterval = acc[lastIndexAcc][0];

      endLastInterval >= start
        ? (acc[lastIndexAcc] = [startLastInterval, Math.max(end, endLastInterval)])
        : (acc[nextIndexAcc] = [start, end]);
      return acc;
    }, []);
  }
  const mergeInterval = getMergeInterval(interspace);
  const sum = mergeInterval.reduce((acc, [start, end]) => {
    acc += end - start;
    return acc;
  }, 0);

  return sum;
}

console.log(
  sumIntervals([
    [1, 5],
    [1, 5],
  ]),
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
  sumIntervals([
    [1, 4],
    [-7, 10],
    [3, 5],
  ]),
  sumIntervals([
    [1, 4],
    [7, 10],
    [-3, 5],
  ])
);
