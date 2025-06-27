// Initialize count variable
let count = 0;

// Select the counter display element
const counterEl = document.getElementById("counter");

// Optional: Set initial content using innerHTML or textContent
counterEl.textContent = count; // Displays 0 initially

//! =================================
//!        Event Listeners
//! =================================

// Increase count by 1
document.getElementById("IncreaseBtn").addEventListener("click", function () {
  count++;
  console.log("Increased:", count);
  counterEl.textContent = count;
});

// Decrease count by 1
document.getElementById("decreaseBtn").addEventListener("click", function () {
  count--;
  console.log("Decreased:", count);
  counterEl.textContent = count;
});

// Increase by 10
document
  .getElementById("IncreaseByTenBtn")
  .addEventListener("click", function () {
    count += 10;
    console.log("Set to 10");
    counterEl.textContent = count;
  });

// Reset count to 0
document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0;
  console.log("Reset");
  counterEl.textContent = count;
});
