function betterThanAverage(classPoints, yourPoints) {
  const averageScore = classPoints.reduce((acc, value) => acc + value, 0) / classPoints.length;
  return yourPoints > averageScore;
}

// *There was a test in your class and you passed it. Congratulations!
// *But you're an ambitious person. You want to know if you're better than the average student in your class.

// TODO You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50);
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21);
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9);
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);
betterThanAverage([2, 3], 5);
