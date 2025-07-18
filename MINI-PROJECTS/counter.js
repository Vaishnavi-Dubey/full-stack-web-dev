let count = 0;

// Select the counter display element
const counterEl = document.getElementById("counter");

// Update display
function updateCounter() {
  counterEl.textContent = count;
  counterEl.style.transform = "scale(1.1)";
  setTimeout(() => (counterEl.style.transform = "scale(1)"), 150);
}

// Increase count by 1
document.getElementById("increaseBtn").addEventListener("click", function () {
  count++;
  updateCounter();
});

// Decrease count by 1
document.getElementById("decreaseBtn").addEventListener("click", function () {
  count--;
  updateCounter();
});

// Increase by 10
document
  .getElementById("increaseByTenBtn")
  .addEventListener("click", function () {
    count += 10;
    updateCounter();
  });

// Reset count to 0
document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0;
  updateCounter();
});
