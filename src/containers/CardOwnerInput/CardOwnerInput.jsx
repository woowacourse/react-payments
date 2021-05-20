import useCardOwner from "../../hooks/useCardOwner";
import { CARD_INPUT, INPUT_LABEL_TEXT } from "../../constants";
import TextLimitInput from "../../components/Input/TextLimitInput/TextLimitInput";
import { isNumberText } from "../../utils/cardInputValidation";

const CardOwnerInput = ({ className }) => {
  const { cardOwnerState, setCardOwnerState } = useCardOwner();

  const onCardOwnerInputChange = (event) => {
    const { value } = event.target;

    if (isNumberText(value) && value !== "") {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardOwnerState(value);
  };

  return (
    <TextLimitInput
      className={className}
      labelText={INPUT_LABEL_TEXT.CARD_OWNER}
      placeholder={CARD_INPUT.OWNER_PLACEHOLDER}
      lengthLimit={CARD_INPUT.OWNER_NAME_LENGTH_LIMIT}
      textLength={cardOwnerState.length}
      onInputChange={onCardOwnerInputChange}
    />
  );
};

export default CardOwnerInput;
