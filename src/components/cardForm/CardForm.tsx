import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardNumberInput from '../cardForm/CardNumberInput';
import ExpirationDateInput from '../cardForm/ExpirationDateInput';
import NameInput from '../cardForm/NameInput';
import SecurityCodeInput from '../cardForm/SecurityCodeInput';
import PasswordInput from '../cardForm/PasswordInput';
import { INPUT_MAX_LENGTH } from '../../utils/Constants';

interface CardFormProps {
  onSubmitForm: () => void;
  onChangeForm: (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => void;
}

const CardForm = ({ onSubmitForm, onChangeForm }: CardFormProps) => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState(['', '']);
  const [name, setName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState(['', '']);

  const [cardNumberError, setCardNumberError] = useState('');
  const [expirationDateError, setExpirationDateError] = useState('');
  const [nameError, setNameError] = useState('');
  const [securityCodeError, setSecurityCodeError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [buttonActive, setButtonActive] = useState(false);

  const navigate = useNavigate();

  const isCardNumberValid = cardNumber.every(
    (numberValue) => numberValue.length === INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH
  );
  const isExpirationDateValid = expirationDate.every(
    (dateValue) => dateValue.length === INPUT_MAX_LENGTH.EXPIRATION_DATE_LENGTH
  );
  const isSecurityCodeValid =
    securityCode.length === INPUT_MAX_LENGTH.SECURITY_CODE_LENGTH;
  const isPasswordValid = password.every((passwordValue) => !!passwordValue);

  const isFormValid =
    isCardNumberValid &&
    isExpirationDateValid &&
    isSecurityCodeValid &&
    isPasswordValid &&
    !cardNumberError &&
    !expirationDateError &&
    !securityCodeError &&
    !passwordError;

  useEffect(() => {
    setButtonActive(isFormValid);
  }, [isFormValid]);

  useEffect(() => {
    onChangeForm(cardNumber, expirationDate, name);
  }, [cardNumber, expirationDate, name]);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitForm();
    navigate('/');
  };

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
      <NameInput
        name={name}
        setName={setName}
        errorMessage={nameError}
        setErrorMessage={setNameError}
      />
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
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};

  padding: 10px 20px;

  background-color: transparent;
  border: none;

  font-weight: 700;
  font-size: 14px;

  align-self: flex-end;
  cursor: pointer;
`;

export default CardForm;
