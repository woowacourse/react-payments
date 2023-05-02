import { ChangeEventHandler, FormEventHandler, useContext, useState } from 'react';
import { CardNameInput } from 'components/Input/CardNameInput/CardNameInput';
import { CreditCard } from 'components/common/Card/CreditCard';
import { CardInfoContext, CardInfoProvider } from 'context/CardInfoContext';
import CardDB from 'db/Cards';
import styled from 'styled-components';
import { ModalContext } from 'context/ModalContext';

export type RegisterCardNameFormProps = {
  onSubmit: () => void;
};

export function RegisterCardNameForm({ onSubmit }: RegisterCardNameFormProps) {
  const { cardInfo, setCardInfoName } = useContext(CardInfoContext);
  const { setIsModalOpen } = useContext(ModalContext);
  const [cardName, setCardName] = useState('');

  const handleCardNameInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setCardName(value);
    setCardInfoName(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setIsModalOpen(true);
    CardDB.registerCard(cardInfo);
    setCardInfoName('');
    onSubmit();
  };

  return (
    <CardInfoProvider>
      <FormContainer onSubmit={handleSubmit}>
        <CompleteMsgSpan>카드 등록이 완료되었습니다</CompleteMsgSpan>
        <CreditCard card={cardInfo} />
        <CardNameInputContainer>
          <CardNameInput value={cardName} onChange={handleCardNameInput} />
          <CardNameFormButton type="submit">확인</CardNameFormButton>
        </CardNameInputContainer>
      </FormContainer>
    </CardInfoProvider>
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
  height: fit-content;
  border: none;
  background: white;
  font-size: 18px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;

const CardNameInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 100px;
`;
