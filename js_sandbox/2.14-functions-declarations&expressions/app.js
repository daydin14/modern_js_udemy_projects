// Function Declarations
function greet(firstName = "John", lastName = "Doe") {
    // Old way of defining defaul values, new way is within parameters
    // if(typeof firstName === "undefined") {
    //     firstName = "John";
    // }
    // if(typeof lastName === "undefined") {
    //     lastName = "Doe";
    // }

    //console.log("Hello");
    return "Hello " + firstName + " " + lastName;
}

console.log(greet("John", "Doe"));
console.log(greet());
console.log(greet("Steve", "Smith"));

// Function Expressions
const square = function(x=3) {
    return x * x;
};

console.log(square(8));
console.log(square());

// Immidiately Invocable Function Expressions - AKA IIFEs
// Function you declare and run at the same time

(function(){
    console.log("IFFE Ran...");
})();

(function(name){
    console.log("Hello " + name);
})("Brad");

// Property Methods, function inside an object is called a method
const todo = {
    add: function(){
        console.log("add todo...");
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
};

todo.delete = function() {
    console.log("Delete todo ...");
};

todo.add();
todo.edit(22);
todo.delete();
