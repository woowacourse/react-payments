import CardNumberInput from "./CardNumberInput";
import ExpirationDateInput from "./ExpirationDateInput";
import NameInput from "./NameInput";
import PasswordInput from "./PasswordInput";
import SecurityCodeInput from "./SecurityCodeInput";

const CardRegisterForm = () => {
  return (
    <form>
      <CardNumberInput />
      <ExpirationDateInput />
      <NameInput />
      <SecurityCodeInput />
      <PasswordInput />
    </form>
  );
};

export default CardRegisterForm;
