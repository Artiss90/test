'use strict'

function meeting(s) {
    const listToUpperCase = s.toUpperCase().split(";").map(item => item.split(":"));
    const sort = listToUpperCase.sort(([nameA, familyA],[nameB, familyB]) => {
    if(familyA > familyB){
      return 1
    }
    if(familyA < familyB){
      return -1
    }
    if(familyA === familyB){
      if(nameA > nameB) {
        return 1}
      if(nameA < nameB) {
        return -1}

      return 0
    }
      
    });
    
    return sort.reduce((acc , [name ,family]) => {
        acc += `(${family}, ${name})`;
        return acc
    }, '')
  }

console.log(meeting("Balexis:Wahl;Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"), "// (ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)(WAHL, BALEXIS)")



// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.