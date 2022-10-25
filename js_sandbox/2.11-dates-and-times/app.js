let val;

const today = new Date();
let birthday = new Date("9-10-1981 11:25:00");
birthday = new Date("September 10 1981");
birthday = new Date("9/10/1981");

val = today;
val = today.toString();
val = birthday;

// Get specifics
val = today.getMonth(); // 0 based so its a month behind in a sense
val = today.getDate(); // Day of month
val = today.getDay(); // Numerical representation day based on (Sunday - Saturday, 0 - 7) so 1 is Monday
val = today.getFullYear(); // Current year
val = today.getHours(); // 24 hour format, returns current hour of the day/night
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); // Time stamp, amount of time, amount of seconds that passed since January 1, 1970

// Manipulate Dates and Time
birthday.setMonth(2);
birthday.setDate(12); // Day of month
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);


console.log(typeof val);
console.log(val);
console.log(birthday);