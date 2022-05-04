import CardNumberInput from ".";
import useCard from "../../../hooks/useCard";

export default {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export const CardNumber = () => {
  const { cardInfo, dispatch } = useCard();

  return (
    <CardNumberInput cardNumberValue={cardInfo} onChangeCardNumber={dispatch} />
  );
};
