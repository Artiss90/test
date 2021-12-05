'use strict'
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
  let years = 0
  for ( let populate = p0; populate < p; populate += ((populate/100*percent) + aug)){
    years += 1
  }
  return years
}



console.log(nbYear(1000, 2, 50, 1200)) // 3
console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // 10
