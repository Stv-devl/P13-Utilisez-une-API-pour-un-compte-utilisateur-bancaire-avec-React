import { UserBankModel } from "../../data/formatData";
import { userData } from "../../data/userBankData";
import Checking from "./Checking";
import Saving from "./Saving";
import CreditCard from "./CreditCard";

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
