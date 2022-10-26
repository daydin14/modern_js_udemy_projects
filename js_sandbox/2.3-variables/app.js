// var, let, const

// VAR
var name = "John Doe";
console.log(name);
name = "Steve Smith"; // Reassign Variables
console.log(name);

// Initialize a variable
var greeting;
console.log(greeting);
greeting = "Hello"; // Reassign Variables
console.log(greeting);

// Rules for naming conventions for variables 
// letters, numbers, _, $
// Cannot start with a number

// Multi word variables
var firstName = "John"; // Camel Case
var first_name = "Sara"; // Underscore method
var FirstName = "Tom"; // Pascal Case

// LET
let newName = "John Doe";
console.log(newName);
newName = "Steve Smith";
console.log(newName);

// CONST
const newNewName = "John"; // Cannot reassign
console.log(newNewName);

// Object and its data
const person = {
    name: "John",
    age: 30,
}
console.log(person);
person.name = "Sara";
person.age = 32;
console.log(person);

// Arrays
const numbers = [1,2,3,4,5]; // Cannot re-declare e.g numbers=[1,2,3,4,5,6]
numbers.push(6);
console.log(numbers);

