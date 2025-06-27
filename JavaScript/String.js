//! ================================
//! Ways of Creating Strings
//! ================================

//* Using single quotes
let singleQuoteString = "This is a single quoted string";

//* Using double quotes
let doubleQuoteString = "This is a double quoted string";

//* Using backticks (Template Literals)
let templateLiteralString = `This is a template literal string`;

//! =====================================
//! Common String Methods and Properties
//! =====================================

//* .length → returns the number of characters in the string
let strLength = doubleQuoteString.length;
console.log("Length:", strLength); // Output: 30 ✅

//* Accessing Characters using index (zero-based)
let firstChar = doubleQuoteString[0];
console.log("First Character:", firstChar); // Output: T

//* toLowerCase() → converts string to lowercase
let toLowerCaseStr = doubleQuoteString.toLowerCase();
console.log("Lowercase:", toLowerCaseStr); // Output: this is a double quoted string

//* toUpperCase() → converts string to uppercase
let toUpperCaseStr = doubleQuoteString.toUpperCase();
console.log("Uppercase:", toUpperCaseStr); // Output: THIS IS A DOUBLE QUOTED STRING

//* indexOf() → returns index of the first occurrence of a substring
let positionOfSubstring = doubleQuoteString.indexOf("double");
console.log("Index of 'double':", positionOfSubstring); // Output: 10

//* slice(start, end) → extracts part of the string
let slicedString = singleQuoteString.slice(5, 11);
console.log("Sliced String:", slicedString); // Output: "is a s"

//* replace() → replaces part of the string with another string
let replacedStr = singleQuoteString.replace("This", "Here's");
console.log("Replaced String:", replacedStr); // Output: Here's a single quoted string

//* concat() → joins strings together
let firstName = "Vinsmoke";
let lastName = "Sanji";
let fullName = firstName.concat(" ", lastName);
console.log("Full Name (concat):", fullName); // Output: Vinsmoke Sanji

//* Using + operator to concatenate
let fullName2 = firstName + " " + lastName;
console.log("Full Name (+):", fullName2); // Output: Vinsmoke Sanji

//! =======================================
//! Template Literals with Embedded Values
//! =======================================
let name = "Monkey D. Luffy";
let profession = "Pirate King";

//* Using backticks to interpolate variables
let greeting = `Hello, ${name}, you are ${profession}`;
console.log("Greeting:", greeting); // Output: Hello, Monkey D. Luffy, you are Pirate King
