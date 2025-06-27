//! ==========================================
//! VARIABLES: DECLARATION AND INITIALIZATION
//! ==========================================

//* Syntax: keyword (let/const/var) + variable name + assignment (=) + value

// Declaration and initialization in one line
let age = 30;
console.log("Age:", age); // Output: 30

// Declaration first, then assignment
let country;
country = "Ghana";
console.log("Country:", country); // Output: Ghana

// Multiple declarations, then assignment
let firstName, lastName;
firstName = "Zoro";
lastName = "Roronoa";
console.log("Full Name:", firstName, lastName); // Output: Zoro Roronoa

// Multiple declarations in one line
let kill = 30,
  job = "Pirate",
  country1 = "Japan";

//! ===========================
//! PRIMITIVE DATA TYPES
//! ===========================

//* 1. Number
let age1 = 25; // Integer
let price = 19.99; // Floating point number

//* 2. String
let heroName = "Monkey D. Luffy"; // Single quotes
let greeting = "Hello, World!"; // Double quotes

//* 3. Boolean
let isCaptain = true; // Can be true or false

//* 4. Undefined
let notAssigned; // Declared but not initialized (undefined)

//* 5. Null
let emptyValue = null; // Explicitly no value

//! ===========================
//! NON-PRIMITIVE DATA TYPES
//! ===========================
//* These are reference types used for complex structures

//* 1. Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log("First Fruit:", fruits[0]); // Output: Apple
console.log("Total Fruits:", fruits.length); // Output: 3

//* 2. Objects
let person = {
  name: "Nami",
  age: 20,
  isNavigator: true,
};
console.log("Person Name:", person.name); // Dot notation
console.log("Person Age:", person["age"]); // Bracket notation

//! ===========================
//! LET vs CONST vs VAR
//! ===========================

//* let → allows reassignment
let amount = 40;
amount = 100; // Reassigned
console.log("Updated Amount:", amount); // Output: 100

//* const → cannot be reassigned
const carName = "Mahindra";
// carName = "Honda";  This would throw an error
console.log("Car Name:", carName); // Output: Mahindra

//* var → old way of declaring variables (avoid in modern JS)
// var is function-scoped (unlike let/const which are block-scoped)
var pirate = "Luffy";
pirate = "Zoro"; // Reassignment is allowed
console.log("Pirate:", pirate);
