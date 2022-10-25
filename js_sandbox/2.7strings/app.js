const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design, web development, programming";

let val;

// Concatenation
val = firstName + lastName;
val = firstName + " " + lastName;

// Append
val = "Brad ";
val += "Traversy";

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = 'That\'s awesome, I can\'t wait'; // Performs the same as val = "That's awesome, I can't wait"; without breaking the single quote

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Treat strings like array
val = firstName[2];

// indexOf()
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt(2);
val = firstName.charAt("2");

// Get last char
val = firstName.charAt(firstName.length - 1);

// substrings
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Brad", "Jack");

// includes()
val = str.includes("Hello");
val = str.includes("foo");

console.log(val);