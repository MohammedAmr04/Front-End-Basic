class BankAccount {
  static bankName = "National Bank";

  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }

  static getBankInfo() {
    return `Welcome to ${this.bankName}`;
  }
}

const acc = new BankAccount("Omar");
acc.deposit(1000);

console.log(acc.getBalance());
console.log(BankAccount.getBankInfo());
console.log(BankAccount.bankName);
// console.log(acc.#balance);
