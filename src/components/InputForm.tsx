import styled from 'styled-components';
import { Card } from '../types/card';
import CardNumberField from './CardNumberField';
import CardExpiryDateField from './CardExpiryDateField';
import UserNameField from './UserNameField';

export default function InputForm({
  cardInfo,
  handleInput,
}: {
  cardInfo: Card;
  handleInput: (value: Card) => void;
}) {
  return (
    <FormContainer>
      <CardNumberField cardInfo={cardInfo} handleInput={handleInput} />
      <CardExpiryDateField cardInfo={cardInfo} handleInput={handleInput} />
      <UserNameField cardInfo={cardInfo} handleInput={handleInput} />
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
