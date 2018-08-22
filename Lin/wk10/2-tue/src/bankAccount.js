class BankAccount {
  constructor(type, inputAmount) {
    this.balance = 0;
    this.transactionHistory = [];
    this.type = type;
    this.inputAmount = inputAmount;
  } 

   withdraw() {
    if (this.balance < this.inputAmount) {
      return 'not enough fund!!!'
    }
    else {
      this.transactionHistory.push(`decrease ${this.inputAmount}`)
      return this.balance -= this.inputAmount
    }
  }

  deposit() {
    this.transactionHistory.push(`increase ${this.inputAmount}`)
    return this.balance += this.inputAmount
  }

  showBalance(){
    return this.balance;
  }
}

var account = new BankAccount("checking", 20);
account.deposit();
account.withdraw();
account.showBalance();
console.log(account.transactionHistory);

module.exports = BankAccount;


