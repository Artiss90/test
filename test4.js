"use strict";

// const p = new Promise(function (resolve, reject){
//     setTimeout(() => {
//        resolve('a') 
//     }, 2000);

//     setTimeout(() => {
//        resolve('b') 
//     }, 1000);
// })

// p.then(result => {console.log(result)}) // вернет b

// * Бургер вечеринка

// асинхронная операция
function cookBurger (type) { 
   return Promise.resolve().then(() => {  
        // throw new Error('Error while cooking'); // симуляция ошибки
        return `get Burger for ${type}`
    }) 
}

// обычная операция
function makeMilkshake (type) { return `get Milkshake for ${type}`}

// функция заказа, которая возвращает промис
function order (type) {
  return  Promise.resolve().then(()=>{
     let burger = cookBurger(type)
     return burger.then(function (burger) {
          return burger
      }).catch( err => {
        console.log('oh noes', err)
        return 'отмена заказа'
      })
  }) 
}

order('JakeBurger')
  .then( burger => {
    const milkshake = makeMilkshake('vanila')
    return { burger: burger, shake: milkshake }
  })
  .then( foodItems => {
    console.log('BURGER PARTY !', foodItems)
  })
  .catch( err => {
    console.log(err)
  })