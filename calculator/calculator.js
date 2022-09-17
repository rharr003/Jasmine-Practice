const form = document.getElementById("calc-form");

window.addEventListener("DOMContentLoaded", function () {
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  form.loanamount.value = 10000;
  form.term.value = 5;
  form.rate.value = 0.06;
  calculateMonthlyPayment(getCurrentUIValues());
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const exponent = -values.years * 12;
  const paymentTop = values.amount * (values.rate / 12);
  const paymentBottom = 1 - (1 + values.rate / 12) ** exponent;
  return parseFloat(paymentTop / paymentBottom).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector("#monthly-payment").innerText = monthly;
}
