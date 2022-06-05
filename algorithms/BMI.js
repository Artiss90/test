function bmi(weight, height) {
  const calcBMI = weight / (height * height);

  if (calcBMI <= 18.5) {
    return 'Underweight';
  }
  if (calcBMI <= 25.0) {
    return 'Normal';
  }
  if (calcBMI <= 30.0) {
    return 'Overweight';
  }
  if (calcBMI > 30) {
    return 'Obese';
  }
}

// TODO Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
console.log(bmi(80, 1.8), bmi(90, 1.65), bmi(55, 1.75));
