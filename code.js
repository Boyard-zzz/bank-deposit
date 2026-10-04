// Your existing code stays the same - it still works!
const deposit = document.getElementsByClassName("deposit")[0];
const withdraw = document.getElementsByClassName("withdraw")[0];
const balance = document.getElementsByClassName("balance")[0];

// These still work with or without id
const deposit_input = document.getElementsByClassName("deposit_input")[0];
const withdraw_input = document.getElementsByClassName("withdraw_input")[0];

const deposit_btn = document.getElementsByClassName("deposit_btn")[0];
const withdraw_btn = document.getElementsByClassName("withdraw_btn")[0];

// Get spans by class (since you added classes)
const depositSpan = document.querySelector(".deposit-span");
const withdrawSpan = document.querySelector(".withdraw-span");
const balanceSpan = document.querySelector(".balance-span");

class BankAccount {
    constructor(owner) {
        this.owner = owner;
        this.balance = 0;
        balanceSpan.textContent = "$" + this.balance;
    }

    deposit(amount) {
        this.balance += amount;
        balanceSpan.textContent = "$" + this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            alert("Not enough money to withdraw");
            return false;
        }
        this.balance -= amount;
        balanceSpan.textContent = "$" + this.balance;
        return true;
    }
}

const newAccount = new BankAccount("john");

deposit_btn.addEventListener("click", () => {
    const amount = Number(deposit_input.value);
    if (amount > 0) {
        newAccount.deposit(amount);
        deposit_input.value = "";
    } else {
        alert("Enter a valid amount");
    }
});

withdraw_btn.addEventListener("click", () => {
    const amount = Number(withdraw_input.value);
    if (amount > 0) {
        newAccount.withdraw(amount);
        withdraw_input.value = "";
    } else {
        alert("Enter a valid amount");
    }
});