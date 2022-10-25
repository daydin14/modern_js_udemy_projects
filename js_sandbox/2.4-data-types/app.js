// Primitive Data Types
/*
    String
    Number
    Boolean
    Null
    Undefined
    Symbols (ES6)
*/

// String
const name = "John Doe";
console.log(typeof name); // typeof prints the kind of data type
// Number
const age = 45;
console.log(typeof age);
// Boolean
const hasKids = true;
console.log(typeof hasKids);
// Null
const car = null;
console.log(typeof car); // Kind of a mistake or bug
// Undefinded
let test;
console.log(typeof test);
// Symbol
const sym = Symbol();
console.log(typeof sym);


// Reference Data Types
/*
    Arrays
    Object Literals
    Functions
    Dates
    Anything Else you can store...
*/

// Arrays
const hobbies = ["movies", "music"];
console.log(typeof hobbies);
// Object Literals
const address = {
    city: "Boston",
    state: "MA",
};
console.log(typeof address);
// Dates
const today = new Date();
console.log(today);
console.log(typeof today);