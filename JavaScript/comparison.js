//! =================================
//! Comparison Operators
//! =================================

let numberOfApples = 10; // Number type
let numberOfOranges = "20"; // String type (looks like a number)

//! == (Loose Equality)
//* Compares values after converting types if needed (type coercion)
let isEqual = numberOfApples == numberOfOranges;
console.log("== :", isEqual); // Output: false (10 != 20 even after type conversion)

//! === (Strict Equality)
//* Compares values without converting types
let isStrictEqual = numberOfApples === numberOfOranges;
console.log("=== :", isStrictEqual); // Output: false (different types and values)

//! != (Loose Inequality)
//* Checks if values are not equal, with type conversion
let isNotEqual = numberOfApples != numberOfOranges;
console.log("!= :", isNotEqual); // Output: true (10 != 20)

//! !== (Strict Inequality)
//* Checks if values are not equal or types are different (no type conversion)
let isStrictlyNotEqual = numberOfApples !== numberOfOranges;
console.log("!== :", isStrictlyNotEqual); // Output: true

//! > (Greater Than)
let isGreaterThan = numberOfApples > numberOfOranges;
console.log("> :", isGreaterThan); // Output: false (10 > 20 → false)

//! < (Less Than)
let isLessThan = numberOfApples < numberOfOranges;
console.log("< :", isLessThan); // Output: true (10 < 20 → true)

//! >= (Greater Than or Equal To)
let isGreaterThanOrEqual = numberOfApples >= numberOfOranges;
console.log(">= :", isGreaterThanOrEqual); // Output: false

//! <= (Less Than or Equal To)
let isLessThanOrEqual = numberOfApples <= numberOfOranges;
console.log("<= :", isLessThanOrEqual); // Output: true
