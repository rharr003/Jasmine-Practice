it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 20000,
    years: 20,
    rate: 0.2,
  };
  expect(Number(calculateMonthlyPayment(values))).toEqual(339.76);
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 20000,
    years: 20,
    rate: 0.2,
  };
  expect(
    Array.from(String(calculateMonthlyPayment(values)).split(".")[1]).length
  ).toEqual(2);
});

/// etc
