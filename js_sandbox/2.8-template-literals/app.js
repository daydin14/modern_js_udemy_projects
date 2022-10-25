const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

// Without template literals/strings (es5 way)
html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li><li>City: " + city + "</li></ul>"

html = "<ul>" +
            "<li>Name: " + name + "</li>" +
            "<li>Age: " + age + "</li>" +
            "<li>Job: " + job + "</li>" +
            "<li>City: " + city + "</li>" +
        "</ul>"
;

function hello() {
    return "hello";
}

// With template literals
html = `
    <ul>
        <li>${name}</li>
        <li>${age}</li>
        <li>${job}</li>
        <li>${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? "Over 30" : "Under 30"}</li> 
    </ul>
`;
// Line 31 is an if else inside template literal structure, ? means if and : means else, the 2 strings after are what would be printed if true or false based on condition

document.body.innerHTML = html;