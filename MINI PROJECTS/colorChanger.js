const btn1El = document.querySelector(".btn1");
const btn2El = document.querySelector(".btn2");
const resetBtn = document.querySelector(".reset");
const titleEl = document.querySelector(".title");
const bodyEl = document.querySelector("body");

const gradients = [
  "linear-gradient(135deg, #667eea, #764ba2)",
  "linear-gradient(135deg, #ffecd2, #fcb69f)",
  "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
  "linear-gradient(135deg, #d4fc79, #96e6a1)",
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #f6d365, #fda085)",
  "linear-gradient(135deg, #fbc2eb, #fcd1e1)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #cfd9df, #e2ebf0)",
];

// Set default gradient
let currentBackground = gradients[6];

btn1El.addEventListener("click", function () {
  let newGradient;
  do {
    newGradient = gradients[Math.floor(Math.random() * gradients.length)];
  } while (newGradient === currentBackground); // Avoid same gradient repeat

  bodyEl.style.background = newGradient;
  currentBackground = newGradient;
});

btn2El.addEventListener("click", () => {
  titleEl.style.fontSize = "4rem";
});

resetBtn.addEventListener("click", function () {
  currentBackground = gradients[6]; // Default
  bodyEl.style.background = currentBackground;
  titleEl.style.fontSize = "2.2rem";
});
