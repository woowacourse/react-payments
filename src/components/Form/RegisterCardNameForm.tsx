import { ChangeEventHandler, FormEventHandler, useContext, useState } from 'react';
import { CardNameInput } from 'components/Input/CardNameInput';
import { CreditCard } from 'components/common/Card/CreditCard';
import { CardFormContext, CardFormProvider } from 'context/CardForm';

import CardDB from 'db/Cards';

import styled from 'styled-components';

export type RegisterCardNameFormProps = {
  onSubmit: () => void;
};

export function RegisterCardNameForm({ onSubmit }: RegisterCardNameFormProps) {
  const { newCard, setNewCardName } = useContext(CardFormContext);
  const [cardName, setCardName] = useState('');

  const handleCardNameInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setCardName(value);
    setNewCardName(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    CardDB.registerCard(newCard);
    onSubmit();
  };

  return (
    <CardFormProvider>
      <FormContainer onSubmit={handleSubmit}>
        <CreditCard card={newCard} />
        <CardNameInput value={cardName} onChange={handleCardNameInput} />
        <button type="submit">확인</button>
      </FormContainer>
    </CardFormProvider>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
