document.getElementById("calculateBtn").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("amount").value);
  const interest = parseFloat(document.getElementById("interest").value);
  const years = parseFloat(document.getElementById("years").value);

  if (
    isNaN(amount) ||
    isNaN(interest) ||
    isNaN(years) ||
    amount <= 0 ||
    interest <= 0 ||
    years <= 0
  ) {
    alert("Please enter valid positive numbers in all fields.");
    return;
  }

  const monthlyInterest = interest / 100 / 12;
  const totalPayments = years * 12;

  const x = Math.pow(1 + monthlyInterest, totalPayments);
  const monthlyPayment = (amount * x * monthlyInterest) / (x - 1);

  const totalPayment = monthlyPayment * totalPayments;
  const totalInterest = totalPayment - amount;

  document.getElementById("monthly-payment").textContent =
    monthlyPayment.toFixed(2);
  document.getElementById("total-payment").textContent =
    totalPayment.toFixed(2);
  document.getElementById("total-interest").textContent =
    totalInterest.toFixed(2);
});
