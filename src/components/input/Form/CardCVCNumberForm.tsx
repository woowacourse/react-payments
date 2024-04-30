import { useEffect } from "react";
import CARD_FORM_MESSAGE from "../../../constants/cardFormMessage";
import useInput from "../../../hooks/useInput";
import CreditCardForm from "../../creditCardForm";
import InputCVCNumber from "../InputForm/InputCVCNumber";

interface CardCVCNumberFormProps {
  cvc: CVC;
  setCVC: (value: CVC) => void;
  setIsCVCValid: (value: boolean) => void;
  handleCardClick: () => void;
}

interface CVC {
  number: string;
}

const CardCVCNumberForm = ({
  cvc,
  setCVC,
  setIsCVCValid,
  handleCardClick,
}: CardCVCNumberFormProps) => {
  const [inputValue, handleChange, cvcError] = useInput(cvc);

  useEffect(() => {
    setCVC(inputValue);
    setIsCVCValid(!cvcError);
  }, [inputValue, cvcError, setCVC, setIsCVCValid]);

  return (
    <CreditCardForm title={CARD_FORM_MESSAGE.inputCardCVC} inputError={cvcError}>
      <InputCVCNumber
        inputValue={inputValue.number}
        handleChange={handleChange}
        inputError={cvcError}
        onClick={handleCardClick}
      />
    </CreditCardForm>
  );
};

export default CardCVCNumberForm;
