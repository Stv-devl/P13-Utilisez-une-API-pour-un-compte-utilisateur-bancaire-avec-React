export class UserBankModel {
  /**
   * Initializes a new instance of UserBankModel with data for the user's banking accounts.
   * @param {Object[]} data - The user's bank account data.
   */
  constructor(data) {
    this.bankChecking = data[0].bankChecking.amount;
    this.bankCheckingMulti = data[0].bankChecking.multiplicator;
    this.bankSaving = data[0].bankSaving.amount;
    this.bankSavingMulti = data[0].bankSaving.multiplicator;
    this.bankCreditCard = data[0].bankCreditCard.amount;
    this.bankCreditCardMulti = data[0].bankCreditCard.multiplicator;
  }

  get bankModel() {
    /**
     * Gets the banking model with details for checking, saving, and credit card accounts.
     * @returns {Object} - The banking model with account details.
     */
    return {
      bankChecking: this.bankChecking,
      bankCheckingMulti: this.bankCheckingMulti,
      bankSaving: this.bankSaving,
      bankSavingMulti: this.bankSavingMulti,
      bankCreditCard: this.bankCreditCard,
      bankCreditCardMulti: this.bankCreditCardMulti,
    };
  }
}
