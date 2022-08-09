function hoursIntoSeconds(num){
    return num*3600
}
console.log(2)

function appendFrintend (element){
    return element+'Frontend'
} 

function arrLength (arr) {
    for (let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum
}

//Date format 
function calcTime (minSec){
    let timerMin = Math.floor(minSec/60)
    let timerSecond = minSec % 60
    if (timerMin.toString().length === 1){
        timerMin = '0' + timerMin 
    }
    return timerMin
}
//FINDMAX
function findMax (element){
    let max = element [0]
    for (let i=1; i<element.length; i++) {
        if(element [i] > max){
            return max
        }
    }
    return max
}
//Reverse
function reverseString (string){
    let newArr = ' '
    for(let i=0; i<string.length; i++){
      return newArr = string[i] + newArr
    }
    return newArr
}
//abc = cba

function reverseString (string){
    let newArr = ' '
    for(let i=string.length-1; i<=0; --i){
      return newArr += string[i]
    }
    return newArr
}



//removeApple

function removeApple (arr){
    let noApple = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] !== 'Apple'){
            noApple.push(arr(i))
        }
    }
    return noApple
}
//FILTER 
function removeApple (arr){
    return arr.filter(elem => elem !=="Apple") //return if you are using curly brackets
}
