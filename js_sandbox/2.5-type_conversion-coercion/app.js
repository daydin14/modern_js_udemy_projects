// Type-Conversion:
let val;

// Number to string
val = String(555);
val = String(4+4);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// toString method
val = (5).toString();
val = (true).toString();

// String to number
val = Number("5");
val = Number("hello"); // Returns NaN (not a number), can't get parsed as a number

// Boolean to number
val = Number(true);
val = Number(false);

// Null to number
val = Number(null);

// Array to number
val = Number([1,2,3]); // Returns NaN (not a number), can't get parsed as a number

// parseInt()
val = parseInt("100");
val = parseInt("100.30");
val = parseFloat("100.301");

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // length only works on strings
console.log(val.toFixed(2)); // only works on numbers, specifies decimals, the number inside toFixed(gives that many decimal places)

// Type-Coercion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

// Output
console.log(sum);
console.log(typeof sum);