export class UserModel {
  constructor(data) {
    this.data = data.userData ? data.userData : data;
    this.createdAt = this.data.createdAt;
    this.email = this.data.email;
    this.firstName = this.data.firstName;
    this.id = this.data.id;
    this.lastName = this.data.lastName;
    this.updatedAt = this.data.updatedAt;
  }
  get models() {
    return {
      data: this.data,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
export class UserBankModel {
  constructor(data) {
    this.bankChecking = data[0].bankChecking.amount;
    this.bankCheckingMulti = data[0].bankChecking.multiplicator;
    this.bankSaving = data[0].bankSaving.amount;
    this.bankSavingMulti = data[0].bankSaving.multiplicator;
    this.bankCreditCard = data[0].bankCreditCard.amount;
    this.bankCreditCardMulti = data[0].bankCreditCard.multiplicator;
  }

  get bankModel() {
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
