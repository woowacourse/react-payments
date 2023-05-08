import { ChangeEventHandler, FormEventHandler, useContext, useState } from 'react';
import { CardNameInput } from 'components/Input/CardNameInput/CardNameInput';
import { CreditCard } from 'components/common/Card/CreditCard';
import { CardInfoContext, CardInfoProvider, defaultCardInfo } from 'context/CardInfoContext';
import CardDB from 'db/Cards';
import styled from 'styled-components';
import { Spinner } from 'components/Spinner/Spinner';
import { validateCard } from 'util/ValidateCard';

export type RegisterCardNameFormProps = {
  onSubmit: () => void;
};

export function RegisterCardNameForm({ onSubmit }: RegisterCardNameFormProps) {
  const { cardInfo, setCardInfoName, setCardInfo } = useContext(CardInfoContext);
  const [isLoading, setIsLoading] = useState(false);
  const [cardName, setCardName] = useState('');

  const handleCardNameInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setCardName(value);
    setCardInfoName(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    CardDB.registerCard(cardInfo);
    setCardInfoName('');
    setIsLoading(true);
    setTimeout(() => {
      setCardInfo(defaultCardInfo);
      setIsLoading(false);
      onSubmit();
    }, 1500);
  };

  if (isLoading) {
    return (
      <>
        <Spinner />
        <span>카드를 등록중입니다.</span>
      </>
    );
  }

  return (
    <CardInfoProvider>
      <FormContainer onSubmit={handleSubmit}>
        <CompleteMsgSpan>카드 등록이 완료되었습니다</CompleteMsgSpan>
        <CreditCard card={cardInfo} />
        <CardNameInputContainer>
          <CardNameInput value={cardName} onChange={handleCardNameInput} />
          <CardNameFormButton type="submit" disabled={!validateCard(cardInfo)}>
            확인
          </CardNameFormButton>
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
  :disabled {
    color: var(--light-gray-text-color);
    cursor: not-allowed;
  }
`;

const CardNameInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 100px;
`;
