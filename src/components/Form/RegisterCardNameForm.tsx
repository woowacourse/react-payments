import { ChangeEventHandler, FormEventHandler, useContext, useState } from 'react';
import { CardNameInput } from 'components/Input/CardNameInput/CardNameInput';
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
        <CompleteMsgSpan>카드 등록이 완료되었습니다</CompleteMsgSpan>
        <CreditCard card={newCard} />
        <CardNameInput value={cardName} onChange={handleCardNameInput} />
        <CardNameFormButton type="submit">확인</CardNameFormButton>
      </FormContainer>
    </CardFormProvider>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompleteMsgSpan = styled.span`
  margin-top: 130px;
  margin-bottom: 36px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const CardNameFormButton = styled.button`
  border: none;
  background: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
