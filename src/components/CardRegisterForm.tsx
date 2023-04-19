import CardNumberInput from "./CardNumberInput";
import ExpirationDateInput from "./ExpirationDateInput";
import NameInput from "./NameInput";
import SecurityCodeInput from "./SecurityCodeInput";

const CardRegisterForm = () => {
  return (
    <form>
      <CardNumberInput />
      <ExpirationDateInput />
      <NameInput />
      <SecurityCodeInput />
    </form>
  );
};

export default CardRegisterForm;
