import CardNumberInput from ".";
import useCard from "../../hooks/useCard";

export default {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export const CardNumber = () => {
  const [form, dispatch] = useCard();
  const { cardNumber } = form;

  return <CardNumberInput state={cardNumber} updateForm={dispatch} />;
};
