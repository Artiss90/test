'use strict'

let input1 =[[1,3],[2,6],[8,10],[15,18]] // [[1,6],[8,10][15,18]]
let input3 =[[8,10],[2,6],[1,3],[15,18]] // [[1,6],[8,10][15,18]]
let input2 =[[1,4],[4,5]] // [[1,5]]

function mergeInterval(intervals) {
    if(intervals.length < 2){
        return intervals
    }
    
    const sortIntervals = intervals.sort((a,b) => a[0]-b[0])
    
    return sortIntervals.reduce((acc, [start, end]) => {
        if(acc.length === 0){
            acc[0] = [start,end]
            return acc
        }

        const lastIndexAcc =  acc.length - 1;
        const nextIndexAcc =  acc.length;
        const endLastInterval = acc[lastIndexAcc][1];
        const startLastInterval = acc[lastIndexAcc][0];

        endLastInterval >= start ? acc[lastIndexAcc] = [startLastInterval, end] : acc[nextIndexAcc] = [start,end];
        return acc
    }, [])
}

console.log(mergeInterval(input1), "[[1,6],[8,10][15,18]]")
console.log(mergeInterval(input2), "[[1,5]]")
console.log(mergeInterval(input3), "[[1,6],[8,10][15,18]]")


// На вход подается массив интервалов (от и до). К примеру, речь идет о начале и окончании встреч. 
// На выход вы должны вернуть новый массив интервалов, в котором будут помечены все занятые встречами отрезки времени. 
// Если два каких-то митинга пересекаются, то в результат должен попасть один отрезок времени с самым ранним началом и самым поздним окончанием из этих двух встреч. Митинги также считаются пересекающимися, если один начинается ровно тогда, когда закончился предыдущий.

