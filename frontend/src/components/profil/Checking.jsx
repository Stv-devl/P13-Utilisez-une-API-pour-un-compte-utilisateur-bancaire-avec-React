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
