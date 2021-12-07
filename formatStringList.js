'use strict'

function formatStringList(names) {
  const lengthNames = names.length;

  if(lengthNames === 0){
    return ''
  }

  const strName = names.map(({name}) => name)
  
  if(lengthNames === 1){
    return strName.toString()
  }
  
  if(lengthNames > 1){
    const indexCut = lengthNames - 2 // 2 последних вырезаем
    const lastNames= strName.splice(indexCut)
    const joinedLastNames = lastNames.join(' & ')
    const joinedAllNames = [...strName, joinedLastNames].join(', ')
   
  return joinedAllNames   
  }
}


console.log(formatStringList([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])) // 'Bart, Lisa, Maggie, Homer & Marge'
console.log(formatStringList([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])) // 'Bart, Lisa & Maggie'
console.log(formatStringList([{name: 'Bart'},{name: 'Lisa'}])) // 'Bart & Lisa'
console.log(formatStringList([{name: 'Bart'}])) // 'Bart'
console.log(formatStringList([])) // ''

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
//  returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''