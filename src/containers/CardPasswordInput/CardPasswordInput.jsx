import { CARD_INPUT, INPUT_LABEL_TEXT, STATE_KEY } from "../../constants";
import InputBoxList from "../../components/Input/InputBoxList/InputBoxList";
import useCardPassword from "../../hooks/useCardPassword";
import { isNumberText } from "../../utils/cardInputValidation";
import ErrorText from "../../components/ErrorText/ErrorText";
import useCardInputValidation from "../../hooks/useCardInputValidation";

const CardPasswordInput = ({ className }) => {
  const { cardPassword, setCardPasswordState } = useCardPassword();
  const { validationMessage } = useCardInputValidation();

  const onCardPasswordInputChange = (event) => {
    const { value, name: inputIndex } = event.target;
    if (!isNumberText(value)) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    const newCardPassword = [...cardPassword];
    newCardPassword[Number(inputIndex)] = value;
    setCardPasswordState(newCardPassword);
  };

  return (
    <>
      <InputBoxList
        className={className}
        labelText={INPUT_LABEL_TEXT.CARD_PASSWORD}
        inputCount={CARD_INPUT.CARD_PASSWORD_INPUT_COUNT}
        dotCount={CARD_INPUT.CARD_PASSWORD_DOT_COUNT}
        onInputChange={onCardPasswordInputChange}
      />
      {validationMessage[STATE_KEY.CARD_PASSWORD] !== "" && (
        <ErrorText>{validationMessage[STATE_KEY.CARD_PASSWORD]}</ErrorText>
      )}
    </>
  );
};

export default CardPasswordInput;
