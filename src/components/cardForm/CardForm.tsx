import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import CardNumberInput from '../cardForm/CardNumberInput';
import ExpirationDateInput from '../cardForm/ExpirationDateInput';
import NameInput from '../cardForm/NameInput';
import SecurityCodeInput from '../cardForm/SecurityCodeInput';
import PasswordInput from '../cardForm/PasswordInput';

interface CardFormProps {
  onChangeForm: (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => void;
}

const CardForm = ({ onChangeForm }: CardFormProps) => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState(['', '']);
  const [name, setName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState(['', '']);

  useEffect(() => {
    onChangeForm(cardNumber, expirationDate, name);
  }, [cardNumber, expirationDate, name]);

  return (
    <FormContainer>
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <ExpirationDateInput
        expirationDate={expirationDate}
        setExpirationDate={setExpirationDate}
      />
      <NameInput name={name} setName={setName} />
      <SecurityCodeInput
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
      />
      <PasswordInput password={password} setPassword={setPassword} />
    </FormContainer>
  );
};

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
`;

export default CardForm;
