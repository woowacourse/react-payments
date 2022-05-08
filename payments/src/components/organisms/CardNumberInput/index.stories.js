import CardNumberInput from ".";
import useCard from "../../../hooks/useCard";

export default {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export const CardNumber = () => {
  const { cardInfo, updateCard } = useCard();

  return (
    <CardNumberInput
      cardNumberValue={cardInfo}
      onChangeCardNumber={updateCard}
    />
  );
};
