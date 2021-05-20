import SeperatedInputList from "../../components/Input/SeperatedInputList/SeperatedInputList";
import useCardNumber from "../../hooks/useCardNumber";
import { INPUT_LABEL_TEXT } from "../../constants";
import { isNumberText } from "../../utils/cardInputValidation";

const CardNumberInput = ({ className }) => {
  const { cardNumberState, setCardNumberState } = useCardNumber();

  const onCardNumberInputChange = (event) => {
    const { value, name } = event.target;

    if (!isNumberText(value)) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    if (!(name in cardNumberState)) {
      return;
    }

    setCardNumberState({
      ...cardNumberState,
      [name]: value,
    });
  };

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
