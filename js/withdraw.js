// step:1 add a event listener to the button
document.getElementById("btn-withdraw").addEventListener("click", function () {
// step:get the value from input field 
  const withdrawField = document.getElementById("user-withdraw");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
//   step: 3 get the previous withdraw balance
  const withdrawAmountElement = document.getElementById("withdraw-balance");
  const withDrawBalanceString = withdrawAmountElement.innerText;
  const WithdrawBalance = parseFloat(withDrawBalanceString);
//   step:4 set the current withdraw
  const totalWithdrawAmount = newWithdrawAmount + WithdrawBalance;
  withdrawAmountElement.innerText = totalWithdrawAmount;
//   step:5 get the current balance total
  const currentBalanceTotalAmount = document.getElementById("balance-total");
  const currentBalanceTotalString = currentBalanceTotalAmount.innerHTML;
  const currentBalanceTotal = parseFloat(currentBalanceTotalString);
//   step:6 set the current balance total
  const newBalance = currentBalanceTotal - newWithdrawAmount;
  currentBalanceTotalAmount.innerText = newBalance;
//   step: empty the input field
  withdrawField.value = "";
});
