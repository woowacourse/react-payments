import GuideInput from "../../components/Input/GuideInput/GuideInput";
import { INPUT_LABEL_TEXT } from "../../constants";
import useCardCVC from "../../hooks/useCardCVC";
import { isNumberText } from "../../utils/cardInputValidation";

const CardCVCInput = ({ className }) => {
  const { setCardCVCState } = useCardCVC();

  const onCardCVCInputChange = (event) => {
    const { value } = event.target;

    if (!isNumberText(value)) {
      event.target.value = event.target.value.slice(0, -1);
      return;
    }

    setCardCVCState(value);
  };

  return (
    <GuideInput className={className} labelText={INPUT_LABEL_TEXT.CARD_CVC} onInputChange={onCardCVCInputChange} />
  );
};

export default CardCVCInput;
