// CardNumberForm.tsx
import { useEffect } from "react";
import { CardNumberValue } from "../../../@types/CreditCard";
import CARD_FORM_MESSAGE from "../../../constants/cardFormMessage";
import useInput from "../../../hooks/useInput";
import CreditCardForm from "../../creditCardForm";
import InputCreditCardNumber from "../InputForm/InputCreditCardNumber";

interface CardNumberFormProps {
  cardNumber: CardNumberValue;
  setCardNumber: (value: CardNumberValue) => void;
  setIsCardNumberValid: (value: boolean) => void;
  cardNumberError: boolean;
  setCardNumberError: (value: boolean) => void;
}

const CardNumberForm = ({
  cardNumber,
  setCardNumber,
  setIsCardNumberValid,
  cardNumberError,
  setCardNumberError,
}: CardNumberFormProps) => {
  const [inputValue, handleChange, inputError] = useInput(cardNumber);

  useEffect(() => {
    setCardNumber(inputValue);
    setCardNumberError(inputError);
  }, [inputValue, inputError, setCardNumber, setCardNumberError]);

  return (
    <CreditCardForm
      title={CARD_FORM_MESSAGE.inputCardNumber}
      description={CARD_FORM_MESSAGE.cardNumberDescription}
      inputError={cardNumberError}
    >
      <InputCreditCardNumber
        inputValue={{
          firstValue: inputValue.firstValue,
          secondValue: inputValue.secondValue,
          thirdValue: inputValue.thirdValue,
          fourthValue: inputValue.fourthValue,
        }}
        handleChange={handleChange}
        inputError={cardNumberError}
      />
    </CreditCardForm>
  );
};

export default CardNumberForm;
