"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    Account_holder;
    balance;
    constructor(Account_holder, balance) {
        this.Account_holder = Account_holder,
            this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}
const user1 = new Bank("Anuja", 5000);
console.log(user1.Account_holder, user1.balance);
user1.deposit(1000);
console.log(user1.balance);
user1.withdraw(300);
console.log(user1.balance);
//# sourceMappingURL=bank.js.map