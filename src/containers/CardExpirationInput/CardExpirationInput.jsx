import SeperatedInputList from "../../components/Input/SeperatedInputList/SeperatedInputList";
import { INPUT_LABEL_TEXT } from "../../constants";
import useCardExpiration from "../../hooks/useCardExpiration";

const CardExpirationInput = ({ className }) => {
  const { cardExpirationState, onCardExpirationInputChange } = useCardExpiration();

  return (
    <SeperatedInputList
      className={className}
      labelText={INPUT_LABEL_TEXT.CARD_EXPIRATION}
      onInputChange={onCardExpirationInputChange}
      inputNames={Object.keys(cardExpirationState)}
      placeholder={"MM / YY"}
      seperator={"/"}
      maxInputLength={2}
    />
  );
};

export default CardExpirationInput;
