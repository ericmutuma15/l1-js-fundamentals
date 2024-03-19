// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const name = "Eric";

//TODO: ADD redeclarable variable
var num = 20;

//TODO: ADD re-assignable but not redeclarable variable
let age =18;

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const realNum = 50;

//TODO: Create a redeclarable variable with a boolean value
var p = true;

//TODO: Create a re-assignable variable with a string value
let lastName = "Mutuma"


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
console.log(name + " " +lastName)


//TODO: Interpolate string (`${}`)
const greeting = "Hello";
const fName = "John";
const lName = "Doe";
const message = `${greeting} ${fName} ${lName}`

console.log(message)

//TODO: Convert to uppercase
const msg = "i am a js developer";
console.log(msg.toUpperCase())

//TODO: Convert to lowercase
const stnc = "I AM A FULLSTACK DEV";
console.log(stnc.toLowerCase())

//TODO: Index a specific character
let sentence = "Hello Jane Doe"
let word = sentence.charAt(0)
console.log(word)

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
const x = 10;
const y = "10"
console.log(x===y)


//TODO: strict inequality
console.log(x!==y)

//TODO: equality
console.log(x==y);

//TODO: inequality
console.log(x!=y)

//TODO: greater than
console.log(x>y)

//TODO: less than
console.log(x<y)

//TODO: greater or equal to
console.log(x>=y)

//TODO: less or equal to
console.log(x<=y)


// 5.0 CONTROL FLOW
// TODO: if-else statement
const a = 50;
const b = 30;
let result;

if (a>b) {
    result= "a is greater than b"
}
else {
    result = "b is greater than a"
}
console.log(result)

//TODO: switch-case
const myAge = 20;
let info;

switch (true){
    case  myAge <= 17:
        console.log("You are underage");
        break;

    case myAge >=18:
        console.log("You are a young adult");
        break;
    case myAge >= 25:
        console.log("You are a senior adult");
        break;

}





