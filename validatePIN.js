function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    let isCorrectPin = true;

    for (let i = 0; i < pin.length; i += 1) {
      const isNan = isNaN(parseInt(pin[i]));
      if (isNan) {
        isCorrectPin = false;
        break;
      }
    }

    return isCorrectPin;
  }
  return false;
}

//? ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// *Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

console.log('🚀 ~ 1 ', validatePIN('1234'));
console.log('🚀 ~ 2 ', validatePIN('12345'));
console.log('🚀 ~ 3 ', validatePIN('a234'));
console.log('🚀 ~ 4 ', validatePIN('-1234'));
console.log('🚀 ~ 5 ', validatePIN('12.345'));
console.log('🚀 ~ 6 ', validatePIN('-12345'));
console.log('🚀 ~ 7 ', validatePIN('012345'));
console.log('🚀 ~ 8 ', validatePIN('01234 '));
console.log('🚀 ~ 9 ', validatePIN('123 '));
console.log('🚀 ~ 10 ', validatePIN('123'));
