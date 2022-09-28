
/*
Function name - sayHi
parameters - nameStr, STRING
return - string

concatenation
interpolation
*/

function sayHi(name){
    let newStr = `Hi, ${name}`;
    return newStr;
}

console.log(sayHi("Greyson"));
console.log(sayHi("Jimmy"));
console.log(sayHi("Bob"));


//Function name - bigString
//parameters - str1 str2
//return - string length
//IF EQUAL - don't return, just console.log they're equal

function bigString(str1, str2){
    if (str1.length > str2.length){
    return str1;
}     else if (str2.length > str1.length){
    return str2;
}     else (str1.length = str2.length)
    return `${str1} length is equal to ${str2}`;
}

console.log(bigString("Nacelle","Rotor"))
console.log(bigString("Top Out", "Base/Mid"))
console.log(bigString("blue", "ship"))


function bigNum(num1, num2){
    if (num1 > num2){
    return num1;
}     else if (num2 > num1){
    return num2;
}     else (num1 === num2)
    return `${num1} is equal to ${num2}`;
}
console.log(bigNum(419, 1336))

// #### `fiveMore`

// Write a function called `fiveMore` that takes in an array of numbers and adds 5 to each odd number then returns the updated array.

function fiveMore(numsArray){
    
    for (let i = 0; i < numsArray.length; i++){
    if(numsArray[i] % 2 !== 0){
        numsArray[i] +=5;
    }
}
    return numsArray;
    }

console.log(fiveMore([1,2,3,4]))
console.log(fiveMore([1,3,5,7]))
console.log(fiveMore([2,22,222]))

// #### `arraySummer`

// Write a function called `arraySummer` that takes in an array of numbers and adds each number in the array together.  Return the total.

function arraySummer(numArray){
    let sum = 0
    for (let i=0; i < numArray.length; i++){ 
    sum += numArray[i]
    }
    return sum;
}
console.log(arraySummer([3, 13, 51, 20]))

// #### `everyDivisible`

// Write a function called `everyDivisible` that takes in a number `n` that is less than 10 and then prints every number less than or equal to 100 that is divisible that number `n`.

// For example, if `n = 7`

function everyDivisible(n){
 
    for (let number = 0; number <= 100; number++){
        if(number % n === 0){
        console.log(number)
        }
    }
}

everyDivisible(7);
everyDivisible(2);