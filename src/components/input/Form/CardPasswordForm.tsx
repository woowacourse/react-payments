import { useEffect } from "react";
import CARD_FORM_MESSAGE from "../../../constants/cardFormMessage";
import useInput from "../../../hooks/useInput";
import CreditCardForm from "../../creditCardForm";
import InputCardPassword from "../InputForm/InputCardPassword";

interface CardPasswordFormProps {
  password: Password;
  setPassword: (value: Password) => void;
  setIsPasswordValid: (value: boolean) => void;
}

interface Password {
  number: string;
}

const CardPasswordForm = ({ password, setPassword, setIsPasswordValid }: CardPasswordFormProps) => {
  const [inputValue, handleChange, passwordError] = useInput(password);

  useEffect(() => {
    setPassword(inputValue);
    setIsPasswordValid(!passwordError);
  }, [inputValue, passwordError, setPassword, setIsPasswordValid]);

  return (
    <CreditCardForm
      title={CARD_FORM_MESSAGE.inputCardPassword}
      description={CARD_FORM_MESSAGE.cardPasswordDescription}
      inputError={passwordError}
    >
      <InputCardPassword
        inputValue={inputValue.number}
        handleChange={handleChange}
        inputError={passwordError}
      />
    </CreditCardForm>
  );
};

export default CardPasswordForm;
