// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Arrays from above
val = numbers;
val = numbers2;
val = fruit;
val = mixed;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);
val = Array.isArray("numbers");

// Get a single value from array
val = numbers[3]; // 4th value
val = numbers[0]; // 1st value

// Change a number in an array by index
numbers[2] = 100;

// Find index of vlaue
val = numbers.indexOf(36);

// MUTATING ARRAYS
numbers.push(250); // adds to the end of array
numbers.unshift(120); // add to the front of array
numbers.pop(); // remove last index of array
numbers.shift(); // remove first index of array
numbers.splice(1, 3); // (index, delete count) removes from array
numbers.reverse(); // reverses array
val = numbers.concat(numbers2); // combines 2 arrays
val = fruit.sort(); // sorts in alphabetical order
val = numbers.sort(); // Does not work right
val = numbers.sort(function(x,y){
    return x - y;
}); // sorts numbers smallest to biggest
val = numbers.sort(function(x,y){
    return y - x;
}); // sorts numbers biggest to smallest aka reverse sort

// Find method
function under50(num){
    return num < 50;
}
val = numbers.find(under50); // Gives first number that pops up under 50 based on our method's conditional


// Output
console.log(numbers);
console.log(val);