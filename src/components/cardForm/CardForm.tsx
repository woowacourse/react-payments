import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardNumberInput from '../cardForm/CardNumberInput';
import ExpirationDateInput from '../cardForm/ExpirationDateInput';
import NameInput from '../cardForm/NameInput';
import SecurityCodeInput from '../cardForm/SecurityCodeInput';
import PasswordInput from '../cardForm/PasswordInput';
import { CardFormValueContext } from '../../context/CardFormContext';

interface CardFormProps {
  onChangeForm: (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => void;
}

const CardForm = ({ onChangeForm }: CardFormProps) => {
  const navigate = useNavigate();
  const { buttonActive, cardNumber, expirationDate, name } =
    useContext(CardFormValueContext);

  useEffect(() => {
    onChangeForm(cardNumber, expirationDate, name);
  }, [cardNumber, expirationDate, name]);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/complete');
  };

  return (
    <FormContainer onSubmit={handleSubmitForm}>
      <CardNumberInput />
      <ExpirationDateInput />
      <NameInput />
      <SecurityCodeInput />
      <PasswordInput />
      <NextButton isActive={buttonActive}>다음</NextButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
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
