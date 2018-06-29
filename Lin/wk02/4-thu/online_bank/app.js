var savingsAmount = 0;
var checkingAmount = 0;


var savingsAccount = document.querySelector('.savings');
var btnSavingsWithdraw = document.querySelector('.savings_withdraw');
var btnSavingsDeposit = document.querySelector('.savings_deposit');

var checkingAccount = document.querySelector('.checking');
var btnCheckingWithdraw = document.querySelector('.checking_withdraw');
var btnCheckingDeposit = document.querySelector('.checking_deposit');

function changeColor(element, amount) {
  if (amount === 0) {
    element.style.backgroundColor = "red";
  }
  else {
    element.style.backgroundColor = "grey";

  }
}

function accountWithdraw(account, accountAmount) {
  if (Number(account.querySelector("input").value) <= accountAmount) {
    accountAmount -= Number(account.querySelector("input").value);
    account.querySelector('.amount').textContent = "$ " + accountAmount;
  }

  changeColor(account, accountAmount);
  return accountAmount;

}

function accountDeposit(account, accountAmount) {
  accountAmount += Number(account.querySelector("input").value);
  account.querySelector('.amount').textContent = "$ " + accountAmount;

  changeColor(account, accountAmount);
  return accountAmount;
}

btnSavingsWithdraw.addEventListener("click", () => {
  savingsAmount = accountWithdraw(savingsAccount, savingsAmount);

});

btnSavingsDeposit.addEventListener("click", () => {
  savingsAmount = accountDeposit(savingsAccount, savingsAmount);
});

btnCheckingWithdraw.addEventListener("click", () => {
  checkingAmount = accountWithdraw(checkingAccount, checkingAmount);
});

btnCheckingDeposit.addEventListener("click", () => {
  checkingAmount = accountDeposit(checkingAccount, checkingAmount);
});