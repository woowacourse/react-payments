import useCardOwner from "../../hooks/useCardOwner";
import { CARD_INPUT, INPUT_LABEL_TEXT, STATE_KEY } from "../../constants";
import TextLimitInput from "../../components/Input/TextLimitInput/TextLimitInput";
import { isNumberText } from "../../utils/cardInputValidation";
import ErrorText from "../../components/ErrorText/ErrorText";
import useCardInputValidation from "../../hooks/useCardInputValidation";

const CardOwnerInput = ({ className }) => {
  const { cardOwnerState, setCardOwnerState } = useCardOwner();
  const { validationMessage } = useCardInputValidation();

  const onCardOwnerInputChange = (event) => {
    const { value } = event.target;

    if (isNumberText(value) && value !== "") {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardOwnerState(value);
  };

  return (
    <>
      <TextLimitInput
        className={className}
        labelText={INPUT_LABEL_TEXT.CARD_OWNER}
        placeholder={CARD_INPUT.OWNER_PLACEHOLDER}
        lengthLimit={CARD_INPUT.OWNER_NAME_LENGTH_LIMIT}
        textLength={cardOwnerState.length}
        onInputChange={onCardOwnerInputChange}
      />
      {validationMessage[STATE_KEY.CARD_OWNER] !== "" && (
        <ErrorText>{validationMessage[STATE_KEY.CARD_OWNER]}</ErrorText>
      )}
    </>
  );
};

export default CardOwnerInput;
