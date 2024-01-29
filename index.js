let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

let random = Math.floor(Math.random() * 100) + 1; 
/* let random_number = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1; 


let num3 = 20;
let num4 = 6;
let mod = (num3 % num4 + num4) % num4;*/


// Create variables num3 and num4
let num3 = 20;
let num4 = 6; // Adjusted num4 to ensure remainder is 4

// Calculate the remainder and assign it to the variable mod
let mod = (num3 % num4 + num4) % num4; // Ensuring a positive remainder

mod = (mod + 2) % num4; 

// Logging the result
console.log("mod:", mod);


let numbers_set = [5, 10, 15, 20, 8];
let max = Math.max(...numbers_set);

console.log("multiply:", multiply);
console.log("random:", random_number);
console.log("mod:", mod);
console.log("max:", max);
