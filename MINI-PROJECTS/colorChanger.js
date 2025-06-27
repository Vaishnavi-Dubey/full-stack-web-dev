//! ============================
//! DOM Element Selectors
//! ============================

//* Select buttons and title elements
const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const resetBtn = document.querySelector(".reset");
const titleEl = document.querySelector(".title");
const bodyEl = document.querySelector("body");

//! ============================
//!      Event Listeners
//! ============================
btn1El.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "brown";
});

btn2El.addEventListener("click", () => {
  titleEl.style.fontSize = "90px";
});

resetBtn.addEventListener("click", function () {
  bodyEl.style.backgroundColor = "";
  titleEl.style.fontSize = "30px";
});
