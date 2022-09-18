describe("Helper function tests", function () {
  it("Should return total of tip amount", function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(15);
  });
  it("Should return total of bill amount", function () {
    billAmtInput.value = 400;
    tipAmtInput.value = 10;
    submitPaymentInfo();
    expect(sumPaymentTotal("billAmt")).toEqual(400);
  });
  it("Should return correctly calculated tip percentage", function () {
    expect(calculateTipPercent(100, 10)).toEqual(10);
  });
  it("Should create a valid td element", function () {
    let newTr = document.createElement("tr");
    appendTd(newTr, 100);
    expect(newTr.firstChild.innerText).toEqual("100");
  });
  it("should create a new td button", function () {
    let newTr = document.createElement("tr");
    appendDeleteButton(newTr);
    expect(newTr.firstChild.innerText).toEqual("X");
  });
  afterEach(function () {
    allPayments = {};
    updateSummary();
    paymentTbody.innerHTML = "";
    paymentId = 0;
    summaryTds.innerHTML = "";
  });
});
