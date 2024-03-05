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
