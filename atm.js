class BankAccount {
    constructor() {
        this.balance = 1000; // Initial balance
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    checkBalance() {
        return this.balance;
    }
}

const account = new BankAccount();

function displayBalance() {
    document.getElementById('balance').textContent = '$' + account.checkBalance();
}

function showMessage(message, success) {
    const messageElement = document.getElementById('transaction-message');
    messageElement.textContent = message;
    if (success) {
        messageElement.style.color = 'green';
    } else {
        messageElement.style.color = 'red';
    }
}

function withdraw() {
    const amount = parseFloat(prompt('Enter withdrawal amount:'));
    if (account.withdraw(amount)) {
        showMessage(`Withdrawn $${amount}`, true);
    } else {
        showMessage('Invalid amount or insufficient balance', false);
    }
    displayBalance();
}

function deposit() {
    const amount = parseFloat(prompt('Enter deposit amount:'));
    if (account.deposit(amount)) {
        showMessage(`Deposited $${amount}`, true);
    } else {
        showMessage('Invalid deposit amount', false);
    }
    displayBalance();
}

function checkBalance() {
    showMessage(`Current balance: $${account.checkBalance()}`, true);
}

displayBalance();
