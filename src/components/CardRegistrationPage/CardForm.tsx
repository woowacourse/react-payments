import { useEffect, useState } from "react";
import styled from "styled-components";
import CardNumberInput from "./CardNumberInput";
import ExpirationDateInput from "./ExpirationDateInput";
import NameInput from "./NameInput";
import SecurityCodeInput from "./SecurityCodeInput";
import PasswordInput from "./PasswordInput";
import { useNavigate } from "react-router-dom";

interface CardFormProps {
  onSubmitForm: () => void;
  onChangeForm: (cardNumber: string[], expirationDate: string[], name: string) => void;
}

const CardForm = ({ onSubmitForm, onChangeForm }: CardFormProps) => {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expirationDate, setExpirationDate] = useState(["", ""]);
  const [name, setName] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState(["", ""]);

  const [cardNumberError, setCardNumberError] = useState("");
  const [expirationDateError, setExpirationDateError] = useState("");
  const [nameError, setNameError] = useState("");
  const [securityCodeError, setSecurityCodeError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    onChangeForm(cardNumber, expirationDate, name);
  }, [cardNumber, expirationDate, name]);

  const hasError = () => {
    return cardNumberError || expirationDateError || passwordError || securityCodeError;
  };

  const isAllInputSatisfied = () => {
    return (
      isCardNumberInputSatisfied() &&
      isExpirationDateInputSatisfied() &&
      isSecurityCodeInputSatisfied() &&
      isPasswordInputSatisfied()
    );
  };

  const isCardNumberInputSatisfied = () => {
    return cardNumber.every((numberValue) => numberValue.length === 4);
  };

  const isExpirationDateInputSatisfied = () => {
    return expirationDate.every((dateValue) => dateValue.length === 2);
  };

  const isSecurityCodeInputSatisfied = () => {
    return securityCode.length === 3;
  };

  const isPasswordInputSatisfied = () => {
    return password.every((passwordValue) => !!passwordValue);
  };

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitForm();
    navigate("/");
  };

  const buttonActive = !hasError() && isAllInputSatisfied();

  return (
    <FormContainer onSubmit={handleSubmitForm}>
      <CardNumberInput
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        errorMessage={cardNumberError}
        setErrorMessage={setCardNumberError}
      />
      <ExpirationDateInput
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
        errorMessage={expirationDateError}
        setErrorMessage={setExpirationDateError}
      />
      <NameInput name={name} setName={setName} errorMessage={nameError} setErrorMessage={setNameError} />
      <SecurityCodeInput
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
        errorMessage={securityCodeError}
        setErrorMessage={setSecurityCodeError}
      />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        errorMessage={passwordError}
        setErrorMessage={setPasswordError}
      />
      <NextButton isActive={buttonActive}>다음</NextButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
`;

const NextButton = styled.button<{ isActive: boolean }>`
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};

  padding: 10px 20px;

  background-color: transparent;
  border: none;

  font-weight: 700;
  font-size: 14px;

  align-self: flex-end;
  cursor: pointer;
`;

export default CardForm;
