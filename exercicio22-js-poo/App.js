const Deposit = require("./Deposit");
const Loan = require("./Loan");
const User = require("./User");
const Transfer = require("./Transfer");

module.exports = class App {
    static #users = [];
    
    constructor() {

    }

    static createUser(email, fullName) {
        const userExists = App.findUser(email)
        if(!userExists) {
            this.#users.push(new User(email, fullName))
        }
    }

    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if(user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer(fromUserEmail,toUserEmail,value) {
        const fromUserTransfer = App.findUser(fromUserEmail)
        const toUserTransfer = App.findUser(toUserEmail)
        if(fromUserTransfer && toUserTransfer) {
            const newTransfer = new Transfer(fromUserTransfer, toUserTransfer, value)
            fromUserTransfer.account.addTransfer(newTransfer)
            toUserTransfer.account.addTransfer(newTransfer)
        }
    }

    static loan(email, value, numberOfInstallments) {
        const user = App.findUser(email)
        if(user) {
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanTax(newTaxPercentage) {
        Loan.tax = newTaxPercentage
    }
}