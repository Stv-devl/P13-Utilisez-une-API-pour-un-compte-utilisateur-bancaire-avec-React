/**
 * Saving component
 * Displays the savings account section with balance and a transaction button.
 * @param {number} bankSaving - The savings account balance.
 * @param {string} bankSavingMulti - The account multiplier.
 * @returns {JSX.Element} - The savings account section.
 */
const Saving = ({ bankSaving, bankSavingMulti }) => (
  <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{`Argent Bank Savings (${bankSavingMulti})`}</h3>
      <p className="account-amount">{`$${bankSaving}`}</p>
      <p className="account-amount-description">Available Balance</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
  </section>
);

export default Saving;
