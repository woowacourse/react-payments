import SeperatedInputList from "../../components/Input/SeperatedInputList/SeperatedInputList";
import useCardNumber from "../../hooks/useCardNumber";
import { INPUT_LABEL_TEXT } from "../../constants";

const CardNumberInput = ({ className }) => {
  const { cardNumberState, onCardNumberInputChange } = useCardNumber();

  return (
    <SeperatedInputList
      className={className}
      labelText={INPUT_LABEL_TEXT.CARD_NUMBER}
      onInputChange={onCardNumberInputChange}
      inputNames={Object.keys(cardNumberState)}
      seperator={"-"}
      passwordInputCount={2}
    />
  );
};

export default CardNumberInput;
