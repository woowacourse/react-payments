import ErrorText from "../../components/ErrorText/ErrorText";
import GuideInput from "../../components/Input/GuideInput/GuideInput";
import { INPUT_LABEL_TEXT, STATE_KEY } from "../../constants";
import useCardCVC from "../../hooks/useCardCVC";
import useCardInputValidation from "../../hooks/useCardInputValidation";
import { isNumberText } from "../../utils/cardInputValidation";

const CardCVCInput = ({ className }) => {
  const { setCardCVCState } = useCardCVC();
  const { validationMessage } = useCardInputValidation();

  const onCardCVCInputChange = (event) => {
    const { value } = event.target;

    if (!isNumberText(value)) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardCVCState(value);
  };

  return (
    <>
      <GuideInput className={className} labelText={INPUT_LABEL_TEXT.CARD_CVC} onInputChange={onCardCVCInputChange} />
      {validationMessage[STATE_KEY.CARD_CVC] !== "" && <ErrorText>{validationMessage[STATE_KEY.CARD_CVC]}</ErrorText>}
    </>
  );
};

export default CardCVCInput;
