//Given a rating display a star (*) for each full rating and a full-stop (.) for each half rating

function showRating (num) {
    let newArr = '' // Initialize an empty string
    for (let i=0; i<Math.floor(num.length); i++){  //loop through the rounded down rating 
        newArr += "*"  // add a star for every iteration
        if (i !== Math.floor(num)-1){ 
            newArr += " " //if it is not the last iteration add a space
        }
    }
    if (!Number.isInteger(num)){ 
        newArr += " ." //add a full stop
    }
    return newArr
}

// Sort by lowest to highest price 

function sortLowToHigh (arr) {
    return arr.sort ((a, b) => b-a)
}

//Sort by highest to lowest price  with objects
function sortHighToLow(numbers){
    return numbers.sort ((a, b) => b.price - a.price)
}

console.log(sortHighToLow(
    {id: 1, price: 50},
    {id: 2, price: 760},
    {id: 3, price: 0},
))
// Find all the posts by a single user 

//We are getting fetch from API
//We are converting it to something frontend can read and convert to json()
//
async function postByUser (userId){
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts");
    const result = await promise.json()
    const posts = result.filter(element => element.userId === userId)
    console.log(posts)
}

//First 6 incomplete todos

async function firstSixIncomplete (completed){
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos")
    const result = await promise.json()
    const todos = result.filter(element => element.completed === false).slice(0,6)

    console.log(todos)
}
firstSixIncomplete(6)