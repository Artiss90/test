'use strict'

function numberToExpandedForm(num) {
    const stringNumbers = num.toString().split('')
    const pow = stringNumbers.reverse().map((n, i) => {
        return n * Math.pow(10, i)
    }).reverse()
    const isNotZero = pow.filter( item => item !== 0)


 return isNotZero.join(' + ')
}

console.log(numberToExpandedForm(12), '10 + 2')
console.log(numberToExpandedForm(42), '40 + 2')
console.log(numberToExpandedForm(123), '100 + 20 + 3')
console.log(numberToExpandedForm(70304), '70000 + 300 + 4')



// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form