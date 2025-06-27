//! ==========================
//! NUMBER METHODS
//! ==========================

//* .toFixed(n): Formats number to 'n' decimal places (returns string)
let amount = 19.393;
let result = amount.toFixed(2); // "19.39" → string
console.log("Formatted (toFixed):", result); // Output: "19.39"

//* isNaN(value): Checks if the value is "Not a Number"
let qty = "50";
console.log("Is NaN:", isNaN(qty)); // false → because "50" is a valid number string

//* parseFloat(): Converts a string to a floating-point number
let convertedNum = parseFloat(qty); // 50
console.log("Converted Number (parseFloat):", convertedNum); // Output: 50
console.log("Original String:", qty); // "50" → original remains unchanged

//! ============================
//! ARITHMETIC OPERATORS
//! ============================

//* Addition (+)
let apples = 10;
let oranges = 5;
let totalFruits = apples + oranges; // 15

//* Subtraction (-)
let initialBalance = 1000;
let withdrawal = 200;
let remainBalance = initialBalance - withdrawal; // 800 ✅ (corrected from `=`)

//* Multiplication (*)
let costPriceItem = 20;
let qtyItems = 4;
let totalCost = costPriceItem * qtyItems; // 80

//* Division (/)
let totalDistance = 120;
let hours = 2;
let speed = totalDistance / hours; // 60

//* Modulus (%): Remainder after division
let totalStudents = 53;
let groupSize = 5;
let remainingStudents = totalStudents % groupSize; // 3

//* Exponentiation (**)
let base = 2;
let power = 3;
let exponentResult = base ** power; // 8 → 2 * 2 * 2

//* Increment (++)
let currentAge = 25;
currentAge++; // 26

//* Decrement (--)
let countDown = 10;
countDown--; // 9

//! ============================
//! CASE STUDY: Monthly Budget Tracker
//! ============================

// Scenario:
// Monthly income = $3000
// Expenses: Rent ($1200), Groceries ($600), Utilities ($300), Entertainment ($200)

//* Step 1: Monthly Income
let monthlyIncome = 3000;

//* Step 2: Monthly Expenses
let rent = 1200;
let groceries = 600;
let utilities = 300;
let entertainment = 200;

//* Step 3: Total Expenses
let totalExpenses = rent + groceries + utilities + entertainment; // 2300

//* Step 4: Remaining Savings
let remainingSavings = monthlyIncome - totalExpenses; // 700

//* Step 5: Percentage of Income Spent
let percentageSpent = ((totalExpenses / monthlyIncome) * 100).toFixed(2); // "76.67"

console.log("Total Expenses:", totalExpenses); // 2300
console.log("Remaining Savings:", remainingSavings); // 700
console.log("Percentage Spent:", percentageSpent + "%"); // "76.67%"
