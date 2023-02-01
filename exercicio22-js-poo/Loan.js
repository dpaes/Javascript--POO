const Installment = require('./Installment.js')

module.exports = class Loan {
    static #tax = 1.05;
    
    constructor(value,numberOfInstallments) {
        this.value = value;
        this.numberOfInstallments = [];
        for(let i = 1; i <= numberOfInstallments; i++){
            this.numberOfInstallments.push(new Installment((value * Loan.#tax) / numberOfInstallments , i));
        }
        this.createdAt = new Date();
    }

    static get tax() {
        return Loan.#tax
    }

    static set tax(newTaxPercentage) {
        Loan.#tax = 1 + (newTaxPercentage / 100)
    }
}