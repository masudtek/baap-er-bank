//step No : 1 add event listener to deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("user-deposit");
  const newDepositAmount = depositField.value;
  const depositTotalElement = document.getElementById("deposit-total");
  const previousTotalDeposit = depositTotalElement.innerText;
  const currentDepositTotal =
    parseFloat(previousTotalDeposit) + parseFloat(newDepositAmount);
  depositTotalElement.innerText = currentDepositTotal;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  const balance = parseFloat(newDepositAmount) + previousBalanceTotal;
  balanceTotalElement.innerText = balance;
  depositField.value = "";
});
