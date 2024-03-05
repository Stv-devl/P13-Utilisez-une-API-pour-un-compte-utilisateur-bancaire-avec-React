import { UserBankModel } from "../../data/formatData";
import { userData } from "../../data/userBankData";
import Checking from "./Checking";
import Saving from "./Saving";
import CreditCard from "./CreditCard";

/**
 * Account component
 * Display the account sections for checking, saving, and credit card and send them relevent data
 * @returns {JSX.Element} - The account components for checking, saving, and credit card accounts.
 */

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
      <Checking
        bankChecking={bankChecking}
        bankCheckingMulti={bankCheckingMulti}
      />
      <Saving bankSaving={bankSaving} bankSavingMulti={bankSavingMulti} />
      <CreditCard
        bankCreditCard={bankCreditCard}
        bankCreditCardMulti={bankCreditCardMulti}
      />
    </>
  );
};

export default Account;
