const CreditCard = ({ bankCreditCard, bankCreditCardMulti }) => (
  <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{`Argent Bank Credit Card (${bankCreditCardMulti})`}</h3>
      <p className="account-amount">{`$${bankCreditCard}`}</p>
      <p className="account-amount-description">Current Balance</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
  </section>
);

export default CreditCard;
