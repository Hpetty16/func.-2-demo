////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add=(num1,num2) => num1 + num2

const subtract=(num1,num2) => num1 - num2

const multiply=(num1,num2) => num1 * num2

const divide=(num1,num2) => num1 / num2

//creating a higher-order function that will take the above functions as a callback. Its gonna check and convert if the arguments recieved are not numbers  and then invoke the callback function.
 const calculator = (num1,  num2, callback) => {
     if(+num1 && +num2){
         num1 = +num1
         num2 = +num2
         return callback(num1,num2)
     }else{
         console.log(`you need to send a number`)
     }
 }

 const result = calculator(`1`,`2`, add)
 console.log(result)
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE

//percentage: 50% = .50; 20% = .20
const applyPercentageDiscount = (product,discount) => {
    product.displayPrice = product.basePrice * (1 - discount)
}

//flat rate = $5 or $10
const applyFlatRateDiscount = (product,discount) => {
    product.displayPrice = product.basePrice - discount
}

//store-wide sale for array 
const applyDiscounts = (arr,callback,discount) => {
    arr.forEach(product =>{
        callback(product,discount)
    })
}


// applyDiscounts(dogProducts,applyFlatRateDiscount,2)
// applyDiscounts(catProducts,applyPercentageDiscount,.25)

// console.log(dogProducts)
// console.log(catProducts)

//create a function that applies discounts by category
const applyDiscountsByCategory = (arr,callback,discount,category) => {
    arr.forEach(product => {
        if (product.category === category){
            callback(product,discount)
        }
    })
}
applyDiscountsByCategory(catProducts,applyFlatRateDiscount,1,2)
console.log (catProducts)


//create a function that lets us apply discount based off of our inventory (this is for limited) (if it was for surplus this we would use  >)
const applyDiscountsByLimitedInventory = (arr,callback,discount,amount) => {
    arr.forEach(product => {
        if(product.inventory < amount){
            callback(product,discount)
        }
    })

}

applyDiscountsByLimitedInventory(dogProducts,applyFlatRateDiscount,2,50)
console.log(dogProducts)


////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
const makeSandwhich = (bread) => {
    return function(ingredients){
        let order = `You ordered a ${bread} bread sandwhich with `
        for (let i=0; i < ingredients .length; i++){
            if(ingredients.length === 1){
                order += `${ingredients[i]}`
            }else if(i === ingredients.length - 1 && i !==0){
                order += `and ${ingredients[i]}`
            }else{
                order += `${ingredients[i]}`
                // '+=' same as saying (order = order + `${ingredients[i]}`)
            }
        } return order

    }
}

const makePumpernickleSandwhich = makeSandwhich(`Pumpernickle`)
const makeRyeSandwich = makeSandwhich(`rye`)

console.log(makePumpernickleSandwhich([`cream-cheese`, `peppers`, `capicola`, `seasonings`]))

console.log(makeRyeSandwich(['cream-cheese','anchovies','capers','confit-tomato']))





////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]
        const splitStr = str.split(' ')
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) {
            let word = splitStr[x]

            word = word.toLowerCase()

            if (x !== 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word
        }

        newArr.push(camelCaseStr)
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE
const copyArrAndChange = (arr, cb) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let newValue = cb(arr[i])
        result.push(newValue)
    }
    return result
}

const copyStrToCamelCase = str => {
    const splitStr = str.split(' ')
    let camelCaseStr = ''
    for (let x = 0; x < splitStr.length; x++) {
        let word = splitStr[x]
        word = word.toLowerCase()
        if (x !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1)
        }
        camelCaseStr += word
    }
    return camelCaseStr
}

const copyStrToSnakeCase = str => {
    str = str.toLowerCase()
    const splitStr = str.split(' ')
    const snakeCaseStr = splitStr.join('_')
    return snakeCaseStr
}


//console.log(copyArrAndChange(names, copyStrToSnakeCase))

// using copyArrAndChange in different context
const multiplyByFour = num => num * 4
  
const nums = [1,2,3,4,5]

let mappedNums = nums.map(multiplyByFour)
console.log(mappedNums)

// same output, just writing in-line callback
let mappedNumsAgain = nums.map(num => num * 4)
console.log(mappedNumsAgain)


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

// const mappedColors = colors.map(color => {
//     return color = `pink`
// })
const mappedColors = colors.map(color => color = `pink`)

console.log(mappedColors)


// const mappedColors // = colors.map()

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    const formalGreeting = names => {
        return names.map(name => `Hello, ${name}`)
}
}
const greetings = formalGreeting(formalNames)


// Call formalGreeting passing in the formalNames array

console.log(greetings)

//// FILTER ////

/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

// const placesThatStartWithA // = places.filter()
const placesThatStartWithA = places.filter(place  => place[0].toLowerCase === `a`)

console.log(placesThatStartWithA)
/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// Do not edit the code above.

// CODE HERE

// call the function passing in the jobs array


//// REDUCE ////

/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290]

const productOfArray = numbers => {
    // Code here
    const total = numbers.reduce((acc,curr) => {
        console.log(acc,`-------`,curr)
        return acc + curr
    })
    return total
}

// CODE HERE
console.log(productOfArray([1,2,3,4,5,6,7,8]))

// call productOfArray passing in numsToReduce


/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

// const remaining // = expenses.reduce(//callback, //initial value)