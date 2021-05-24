import ErrorText from "../../components/ErrorText/ErrorText";
import SeperatedInputList from "../../components/Input/SeperatedInputList/SeperatedInputList";
import { INPUT_LABEL_TEXT, STATE_KEY } from "../../constants";
import useCardExpiration from "../../hooks/useCardExpiration";
import useCardInputValidation from "../../hooks/useCardInputValidation";
import { isNumberText } from "../../utils/cardInputValidation";

const CardExpirationInput = ({ className }) => {
  const { cardExpirationState, setCardExpirationState } = useCardExpiration();
  const { validationMessage } = useCardInputValidation();

  const onCardExpirationInputChange = (event) => {
    const { value, name } = event.target;

    if (!isNumberText(value)) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardExpirationState({
      ...cardExpirationState,
      [name]: value,
    });
  };

  return (
    <>
      <SeperatedInputList
        className={className}
        labelText={INPUT_LABEL_TEXT.CARD_EXPIRATION}
        onInputChange={onCardExpirationInputChange}
        inputNames={Object.keys(cardExpirationState)}
        placeholder={"MM / YY"}
        seperator={"/"}
        maxInputLength={2}
      />
      {validationMessage[STATE_KEY.CARD_EXPIRATION] !== "" && (
        <ErrorText>{validationMessage[STATE_KEY.CARD_EXPIRATION]}</ErrorText>
      )}
    </>
  );
};

export default CardExpirationInput;
