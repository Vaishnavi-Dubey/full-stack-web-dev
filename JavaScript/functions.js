//! ===============================
//!    1. Function Declaration
//! ===============================

//* This is a function declaration named 'addNumbers'
//* It doesn't take any parameters and simply adds two fixed numbers

function addNumbers() {
  // Step 1: Declare two variables and assign values
  let a = 10;
  let b = 20;

  // Step 2: Add the values
  let result = a + b;

  // Step 3: Print the result
  console.log("The sum is: " + result);
}

//! Function Call (Invocation)
//* This executes the code inside the 'addNumbers' function
addNumbers(); // Output: The sum is: 30

//! ===================================
//!   2. Function with Parameters
//! ===================================

//* Here, we define a function that accepts two input values (called parameters)
function addNumbers(a, b) {
  // Display the received input values
  console.log("Value of a:", a);
  console.log("Value of b:", b);

  // Calculate the sum using the input parameters
  let result = a + b;

  // Display the sum
  console.log("The sum is: " + result);
  alert(result);
}

//! Function Call with Arguments
//* Arguments are the actual values passed to the function
addNumbers(30, 100);
// Output:
// Value of a: 30
// Value of b: 100
// The sum is: 130

//! ========================
//!  3. return Keyword
//! ========================

//* Function to add two numbers and return the result
function addNumbers(a, b) {
  let result = a + b; // Perform addition
  return result; // Return the value to the caller
}

//* Function call
let sum = addNumbers(5, 10); // The return value is stored in 'sum'

//* Now we can use or display the result
console.log("The sum is:", sum); // Output: The sum is: 15

//! ============================
//!   4. Function Expression
//! ============================

//* Assigning an anonymous function to a variable using function expression
const addNumbers = function (a, b) {
  let results = a + b; // Add the two parameters
  return results; // Return the result
};

//* Call the function and store the returned value
let ans1 = addNumbers(5, 10);
console.log("The sum using function expression is:", ans1); // Output: The sum using function expression is: 15

//! ============================
//!     5. Arrow Function
//! ============================

const addNumbersArrow = (a, b) => {
  let results = a + b; // Perform the addition
  return results; // Return the result
};

//* Call the arrow function and store the result
let ans2 = addNumbersArrow(10, 30);
console.log("The sum using arrow function is:", ans2); // Output: The sum using arrow function is: 40

//! ============================
//! 6. Arrow Function (Short Syntax)
//! ============================

//* Short/concise version with implicit return (no braces `{}` or `return`)
const addNumbersArrowShort = (a, b) => a + b;

let ansShort = addNumbersArrowShort(10, 30);
console.log("The sum using short arrow function is:", ansShort); // Output: 40

//! ==============================
//!  7. Anonymous Functions & IIFEs
//! ==============================

//* An anonymous function is a function without a name.
//* It's commonly used as a callback or wrapped inside parentheses to create an IIFE (Immediately Invoked Function Expression).

//! Basic IIFE (Immediately Invoked Function Expression)

(function () {
  console.log("Namaste");
})();
// Output: Namaste
// Function is defined and invoked immediately

//! IIFE with Parameters

(function (a, b) {
  let results = a + b;
  console.log("Sum (regular IIFE):", results);
})(2, 3);
// Output: Sum (regular IIFE): 5

//! Arrow Function IIFE with Parameters

((a, b) => {
  let results = a + b;
  console.log("Sum (arrow IIFE):", results);
})(10, 20);
// Output: Sum (arrow IIFE): 30

//! ============================
//! 8. Default Parameters
//! ============================

//* Default values are used when arguments are not provided during the function call
const multiply1 = function (a = 1, b = 2) {
  const results = a * b;
  console.log("The product is:", results);
};

//* Both parameters provided — overrides default values
multiply1(10, 10); // Output: The product is: 100

//* Only one argument provided — b uses its default value (2)
multiply1(5); // Output: The product is: 10

//* No arguments provided — both a and b use default values
multiply1(); // Output: The product is: 2

//! ============================
//!       9. Calculator
//! ============================

//! Addition
const add = (a, b) => {
  let results = a + b;
  return results;
};
console.log("Addition:", add(10, 20)); // Output: 30

//! Subtraction
const subtract = (m, n) => {
  let results = m - n;
  return results;
};
console.log("Subtraction:", subtract(20, 10)); // Output: 10

//! Multiplication
const multiply = (m, n) => {
  let results = m * n;
  return results;
};
console.log("Multiplication:", multiply(20, 10)); // Output: 200

//! Division
const divide = (m, n) => {
  if (n === 0) {
    return "Error: Cannot divide by zero"; // ✅ division check
  }
  let results = m / n;
  return results;
};
console.log("Division:", divide(20, 10)); // Output: 2

//! ===================================
//!    CHARACTER & TEXT UTILITIES
//! ===================================

//* 1. Character Count Tool
function characterCount(text) {
  let length = text.length;
  return length;
}

const results = characterCount("JavaScript");
console.log("Character count:", results); // Output: 10

//* 2. Convert Text to Lowercase
const txtToLowerCase = (text) => {
  let lowercase = text.toLowerCase();
  return lowercase;
};

console.log("Lowercase:", txtToLowerCase("NODEJS")); // Output: nodejs

//* 3. Convert Text to Uppercase
const txtToUpperCase = (text) => {
  let uppercase = text.toUpperCase();
  return uppercase;
};

console.log("Uppercase:", txtToUpperCase("nodejs")); // Output: NODEJS

//* 4. Slice Text
const slicedTxt = function (txt, start, end) {
  let sliced = txt.slice(start, end);
  return sliced;
};

console.log("Sliced text:", slicedTxt("NextJS", 0, 2)); // Output: Ne

//! ============================
//!      String Formatter
//! ============================

function formatString(str1, str2) {
  let uppercaseStr1 = str1.toUpperCase();
  let lowercaseStr2 = str2.toLowerCase();
  let combined = uppercaseStr1 + " " + lowercaseStr2;

  return combined;
}

console.log(formatString("wakatta", "DATTEBAYO"));
// Output: WAKATTA dattebayo

//! ============================
//!       BMI Calculator
//! ============================

let calculateBMI = (weight, height) => {
  // Formula: BMI = weight (kg) / height² (m²)
  let bmi = weight / (height * height);
  let status;

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 24.9) {
    status = "Normal weight";
  } else if (bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obesity";
  }

  return status;
};

//! Example Call
const bmiResults = calculateBMI(68, 1.75);
console.log(bmiResults);
// Output: BMI: 22.20 - Normal weight

//! ============================
//!   Student Grading System
//! ============================

function studentGradingSystem(totalMarks, obtainedMarks, classAverage) {
  // Criteria thresholds
  let passingCriteria = totalMarks * 0.5; // 50% pass mark
  let exceptionalCriteria = totalMarks * 0.8; // 80% for excellence

  // Boolean checks
  let hasPassed = obtainedMarks >= passingCriteria;
  let hasPerformedExceptionally = obtainedMarks >= exceptionalCriteria;
  let isAboveAverage = obtainedMarks > classAverage;

  // Return an object with evaluation results
  return {
    hasPassed,
    hasPerformedExceptionally,
    isAboveAverage,
  };
}

//! Example Usage
const results1 = studentGradingSystem(500, 410, 350);

console.log("Passed:", results.hasPassed); // true
console.log("Performed Exceptionally:", results.hasPerformedExceptionally); // true
console.log("Above Class Average:", results.isAboveAverage); // true
