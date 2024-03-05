/**
 * Checking component
 * Displays the checking account section with balance and a transaction button.
 * @param {number} bankChecking - The checking account balance.
 * @param {string} bankCheckingMulti - The account multiplier.
 * @returns {JSX.Element} - The checking account section.
 */

const Checking = ({ bankChecking, bankCheckingMulti }) => (
  <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{`Argent Bank Checking (${bankCheckingMulti})`}</h3>
      <p className="account-amount">{`$${bankChecking}`}</p>
      <p className="account-amount-description">Available Balance</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
  </section>
);

export default Checking;
