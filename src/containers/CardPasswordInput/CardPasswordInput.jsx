import { CARD_INPUT, INPUT_LABEL_TEXT } from "../../constants";
import InputBoxList from "../../components/Input/InputBoxList/InputBoxList";
import useCardPassword from "../../hooks/useCardPassword";

const CardPasswordInput = ({ className }) => {
  const { onCardPasswordInputChange } = useCardPassword();

  return (
    <InputBoxList
      className={className}
      labelText={INPUT_LABEL_TEXT.CARD_PASSWORD}
      inputCount={CARD_INPUT.CARD_PASSWORD_INPUT_COUNT}
      dotCount={CARD_INPUT.CARD_PASSWORD_DOT_COUNT}
      onInputChange={onCardPasswordInputChange}
    />
  );
};

export default CardPasswordInput;
