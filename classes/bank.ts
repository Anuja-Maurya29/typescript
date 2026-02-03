class Bank {
    Account_holder:string
    balance:number

    constructor(Account_holder:string,balance:number){
        this.Account_holder=Account_holder,
        this.balance=balance
    }

    deposit(amount:number){
        this.balance+=amount
    }

    withdraw(amount:number){
  this.balance-=amount
    }
}

const user1 = new Bank("Anuja",5000)
console.log(user1.Account_holder,user1.balance);
user1.deposit(1000);
console.log(user1.balance);
user1.withdraw(300)
console.log(user1.balance);

