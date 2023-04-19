import CardNumberInput from "./CardNumberInput";
import ExpirationDateInput from "./ExpirationDateInput";
import NameInput from "./NameInput";

const CardRegisterForm = () => {
  return (
    <form>
      <CardNumberInput />
      <ExpirationDateInput />
      <NameInput />
    </form>
  );
};

export default CardRegisterForm;
