import CardNumberInput from "./CardNumberInput";
import ExpirationDateInput from "./ExpirationDateInput";

const CardRegisterForm = () => {
  return (
    <form>
      <CardNumberInput />
      <ExpirationDateInput />
    </form>
  );
};

export default CardRegisterForm;
