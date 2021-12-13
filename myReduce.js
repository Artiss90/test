'use strict'

const numbers = [1, 2, 3, 4, 5];

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];

function myReduce(callback, startValue) {

    const array = this
    let result 
    let index = -1

    if(startValue !== undefined)
    { result = startValue}
    
    if(startValue === undefined)
    { result = this[0]
      index = 0}
   
    
    array.forEach( (item, indexForEach , arrayForEach) => {
        if(indexForEach === index) {return}
        result = callback(result, item , indexForEach , arrayForEach)
    })
    return result
}



Array.prototype.myReduce = myReduce;

console.log(numbers.myReduce( (acc, value, indexReduce)=>{
    acc += value
    return acc
}))
console.log(numbers.myReduce( (acc, value)=>{
    acc += value
    return acc
}, 0))
console.log(numbers.myReduce( (acc, value, indexReduce)=>{
    if(indexReduce > 2){
        acc += value
    }
    return acc
}, 0))
console.log(tweets.myReduce((totalLikes, tweet) => totalLikes + tweet.likes, 0))
console.log(tweets.myReduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []))

// * native reduce
console.log('native reduce');
console.log(numbers.reduce( (acc, value)=>{
    acc += value
    return acc
}))
console.log(numbers.reduce( (acc, value)=>{
    acc += value
    return acc
}, 0))
console.log(numbers.reduce( (acc, value, indexReduce)=>{
    if(indexReduce > 2){
        acc += value
    }
    return acc
}, 0))
console.log(tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0))
console.log(tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []))