import GuideInput from "../../components/Input/GuideInput/GuideInput";
import { INPUT_LABEL_TEXT } from "../../constants";
import useCardCVC from "../../hooks/useCardCVC";

const CardCVCInput = ({ className }) => {
  const { onCardCVCInputChange } = useCardCVC();

  return (
    <GuideInput className={className} labelText={INPUT_LABEL_TEXT.CARD_CVC} onInputChange={onCardCVCInputChange} />
  );
};

export default CardCVCInput;
