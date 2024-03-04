import { UserBankModel } from "../../service/formatData";
import { userData } from "../../data/userBankData";

const Account = () => {
  const userBankModel = new UserBankModel(userData);
  const {
    bankChecking,
    bankCheckingMulti,
    bankSaving,
    bankSavingMulti,
    bankCreditCard,
    bankCreditCardMulti,
  } = userBankModel.bankModel;

  return (
    <>
      <h2 className="sr-only">Accounts</h2>
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
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{`Argent Bank Savings (${bankSavingMulti})`}</h3>
          <p className="account-amount">{`$${bankCreditCard}`}</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{`Argent Bank Credit Card (${bankCreditCardMulti})`}</h3>
          <p className="account-amount">{`$${bankSaving}`}</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  );
};

export default Account;
