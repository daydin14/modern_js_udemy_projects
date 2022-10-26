// Gloabl Scope
var a = 1; // has function scope
let b = 2; // has block level scope
const c = 3; // has block level scope



// Function Scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("Function Scope: ", a,b,c);
}
test();

// Block level scope
if(true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("Block Scope: ", a,b,c);
}


for(let a = 0; a < 10; a++) {
    console.log(`Loop: ${a}`);
}

// var in loop instead of let changes global variable which is not good 

console.log("Global Scope: ", a,b,c);