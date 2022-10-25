/*
    Basic If-Else Structure:

    if(something) {
        do something
    } else {
        do something else
    }
*/

const id = 100;

// EQUAL TO
if(id == 101) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

// NOT EQUAL TO
if(id != 101) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

// Test value and type
if(id === 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

// Test Not Equal to value and type
if(id !== 100) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

// Test if its defined
if(id) {
    console.log(`The ID is ${id}`);
} else {
    console.log("No ID");
}

    // const id2 = 101;
if(typeof id2 !== "undefined") {
    console.log(`The ID is ${id2}`);
} else {
    console.log("No ID");
}

// Greater than / less than or equal to
if(id >= 200) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}
if(id <= 200) {
    console.log("CORRECT");
} else {
    console.log("INCORRECT");
}

// If Else
const color = "yellow";
if(color === "red") {
    console.log("Color is Red");
} else if(color === "blue") {
    console.log("Color is Blue");
} else {
    console.log("Color is not red and not blue");
}

// Logical Operators
const name = "Steve";
const age = 25;

// AND &&
if(age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}
// OR ||
if(age < 16 || age > 65) {
    console.log(`${name} cannot run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

// Ternary operator, shorthand for conditionals (? means if, : means else)
console.log(id === 100 ? "Correct" : "Incorrect");

// WITHOUT BRACES
if(id === 100)
    console.log("Correct");
else
    console.log("Incorrect");