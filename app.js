function convertCelsiusFahrenheit (celsius){
    return celsius * 1.8 + 32
}

console.log(convertCelsiusFahrenheit(0))

const convertCelsiusFahrenheit = (celsius) =>{
    return celsius * 1.8 + 32
}
console.log(convertCelsiusFahrenheit(0))

// FILTER 

let arr = [20, 30, 40, 60]
let newArr = arr.filter ((element) =>  {
    console.log(element)
    if (element < 50) {
        return true
    }
})
console.log(newArr)

// example 1(a)
let newArr = arr.filter(element => element <50 )
console.log (newArr)

let grades = ['A+', 'A', 'Fail']
let passed = grades.filter(element => element !== "Fail")
console.log(passed)

//example 2(b)
let grades = ['A+', 'A', 'Fail']
let passed = []

for (let i=0; i<grades.length ; i++){
    if (grades[i]!=='Fail'){
        passed.push(grades[i])
    }
}
console.log(grades[i])

//MAAAAAPPPP
let dollars = [1, 5, 10, 3]
let cents = dollars.map(element => dollars*100)

console.log(cents)

//for loop

//create a new "cents" array
//loop over every element in 'dollars'
//multiply the element by 100
//add this element onto cents 
let dollars = [1, 5, 10, 3]
let cents = []

for(let i = 0; i<dollars.length; i++){
    cents.push (dollars[i]* 100)
}
console.log(cents)

//Creating a registration function
//username
//email
//password
//subscriptionStatus
//discordId
//lessonsCompleted

//Inside your rehister function:
//1. Create a user object
//2. Push this user object onto the 'users' array

let users = [{
    username:'regish',
    email:'regishani@gmail.com',
    password: 'helloworld',
    subscriptionStatus: 'VIP',
    discordId: 'regina4626',
    lessonsCompleted:[0,1,2]
}]
