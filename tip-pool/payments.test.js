describe("Payments tests", function () {
  it("Should create a payment object", function () {
    billAmtInput.value = 200;
    tipAmtInput.value = 50;
    expect(createCurPayment().billAmt).toEqual("200");
    expect(createCurPayment().tipAmt).toEqual("50");
    expect(createCurPayment().tipPercent).toEqual(25);
  });
  it("Update tables with new payment", function () {
    billAmtInput.value = 500;
    tipAmtInput.value = 100;
    submitPaymentInfo();
    expect(paymentId).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("500");
  });
  it("should append new table row", function () {
    billAmtInput.value = 300;
    tipAmtInput.value = 50;
    const payment = createCurPayment();
    appendPaymentTable(payment);
    expect(paymentTbody.children.length).toEqual(1);
  });
  it("should update summary", function () {
    const billamount = parseFloat(Math.random() * 100).toFixed(2);
    billAmtInput.value = billamount;
    tipAmtInput.value = parseFloat(Math.random() * 100).toFixed(2);
    submitPaymentInfo();
    expect(summaryTds[0].innerText).toEqual("$" + billamount);
  });
  afterEach(function () {
    paymentId = 0;
    paymentTbody.innerHTML = "";
  });
});
