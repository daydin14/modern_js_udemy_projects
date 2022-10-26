// FOR LOOP

for(let i = 0; i < 10; i++){
    
    if(i === 2) {
        console.log("2 is my favorite number");
        continue; // Stops loop here, performs action and goes to the next iteration, "keep going"
    }

    if(i === 5) {
        break; // Stops loop based on condition and exits the loop all together
    }
    console.log("Number " + i);
}

// WHILE LOOP
let i = 0;
while (i < 10) {
    console.log("Number " + i);
    i++;
};

// DO WHILE LOOP
let j = 0;
do {
    console.log("Number " + j);
    j++;
}while(j<10);

// LOOP through Array
const cars = ["Ford", "Chevy", "Honda", "Toyota"];
for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
};

// FOR EACH LOOP
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

// MAP METHOD
// Returns a different array
const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Sara"},
    {id: 3, name: "Karen"},
    {id: 4, name: "Steve"},
];
const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

// FOR IN LOOP
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
};
for(let x in user){
    console.log(x);
    console.log(`${x}: ${user[x]}`)
}