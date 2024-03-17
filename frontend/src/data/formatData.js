/**
 * Initializes a new instance of UserBankModel with data for the user's banking accounts.
 * @param {Object[]} data - The user's bank account data.
 */
export class UserBankModel {
  constructor(data) {
    this.bankChecking = data[0].bankChecking.amount;
    this.bankCheckingMulti = data[0].bankChecking.multiplicator;
    this.bankSaving = data[0].bankSaving.amount;
    this.bankSavingMulti = data[0].bankSaving.multiplicator;
    this.bankCreditCard = data[0].bankCreditCard.amount;
    this.bankCreditCardMulti = data[0].bankCreditCard.multiplicator;
  }

  /**
   * Gets the banking model with details for checking, saving, and credit card accounts.
   * @returns {Object} - The banking model with account details.
   */
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

/**
 * Initializes a new instance of HeroModel with data for the hero section of the home page.
 * @param {Object} heroData - The data for the hero section, including subtitles and main text.
 */
export class HeroModel {
  constructor(heroData) {
    this.subtitles = heroData.subtitles;
    this.text = heroData.text;
  }

  /**
   * Gets the hero section model with subtitles and main text.
   * @returns {Object} - The hero section model with subtitles and main text.
   */
  get heroModel() {
    return {
      subtitles: this.subtitles,
      text: this.text,
    };
  }
}

/**
 * Initializes a new instance of FeaturesModel with data for the features section of the home page.
 * @param {Object[]} featuresData - The data for the features section, including an array of features.
 */
export class FeaturesModel {
  constructor(featuresData) {
    this.features = featuresData.map((feature) => ({
      icon: feature.icon,
      title: feature.title,
      description: feature.description,
    }));
  }

  /**
   * Gets the features section model with details for each feature.
   * @returns {Object[]} - The features section model with an array of feature details.
   */
  get featuresModel() {
    return this.features;
  }
}
