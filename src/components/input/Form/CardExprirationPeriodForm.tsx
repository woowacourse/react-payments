import { useEffect } from "react";
import { ExpirationPeriodValue } from "../../../@types/CreditCard";
import CARD_FORM_MESSAGE from "../../../constants/cardFormMessage";
import useInput from "../../../hooks/useInput";
import Validator from "../../../utils/Validator";
import CreditCardForm from "../../creditCardForm";
import InputExpirationPeriod from "../InputForm/InputExpirationPeriod";

interface CardExpirationPeriodFormProps {
  expirationPeriod: ExpirationPeriodValue;
  setExpirationPeriod: (value: ExpirationPeriodValue) => void;
  setIsExpirationPeriodValid: (value: boolean) => void;
}

const CardExpirationPeriodForm = ({
  expirationPeriod,
  setExpirationPeriod,
  setIsExpirationPeriodValid,
}: CardExpirationPeriodFormProps) => {
  const [inputValue, handleChange, expirationPeriodError] = useInput(expirationPeriod);

  useEffect(() => {
    setExpirationPeriod(inputValue);
  }, [inputValue, setExpirationPeriod]);

  useEffect(() => {
    const isMonthValid = Validator.checkCreditCardExpirationPeriod(
      inputValue.month,
      "month"
    ).isValid;
    const isYearValid = Validator.checkCreditCardExpirationPeriod(inputValue.year, "year").isValid;
    setIsExpirationPeriodValid(isMonthValid && isYearValid && !expirationPeriodError);
  }, [inputValue, expirationPeriodError, setIsExpirationPeriodValid]);

  return (
    <CreditCardForm
      title={CARD_FORM_MESSAGE.inputCardExpirationDate}
      description={CARD_FORM_MESSAGE.cardExpirationDateDescription}
      inputError={expirationPeriodError}
    >
      <InputExpirationPeriod
        inputValue={inputValue}
        handleChange={handleChange}
        inputError={expirationPeriodError}
      />
    </CreditCardForm>
  );
};

export default CardExpirationPeriodForm;
