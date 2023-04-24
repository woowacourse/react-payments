import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardNumberInput from '../cardForm/CardNumberInput';
import ExpirationDateInput from '../cardForm/ExpirationDateInput';
import NameInput from '../cardForm/NameInput';
import SecurityCodeInput from '../cardForm/SecurityCodeInput';
import PasswordInput from '../cardForm/PasswordInput';
import { useFormValidation } from '../../hooks/useFormValidation';

interface CardFormProps {
  onSubmitForm: () => void;
  onChangeForm: (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => void;
}

const CardForm = ({ onSubmitForm, onChangeForm }: CardFormProps) => {
  const navigate = useNavigate();
  const [buttonActive, setButtonActive] = useState(false);

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

  useFormValidation(
    cardNumber,
    expirationDate,
    securityCode,
    password,
    cardNumberError,
    expirationDateError,
    securityCodeError,
    passwordError,
    setButtonActive
  );

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
        value={cardNumber}
        setValue={setCardNumber}
        errorMessage={cardNumberError}
        setErrorMessage={setCardNumberError}
      />
      <ExpirationDateInput
        value={expirationDate}
        setValue={setExpirationDate}
        errorMessage={expirationDateError}
        setErrorMessage={setExpirationDateError}
      />
      <NameInput
        value={name}
        setValue={setName}
        errorMessage={nameError}
        setErrorMessage={setNameError}
      />
      <SecurityCodeInput
        value={securityCode}
        setValue={setSecurityCode}
        errorMessage={securityCodeError}
        setErrorMessage={setSecurityCodeError}
      />
      <PasswordInput
        value={password}
        setValue={setPassword}
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
