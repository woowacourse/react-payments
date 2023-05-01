import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCreditCards } from '../hooks/useCreditCards';
import { useResisteringCreditCard } from '../hooks/useResisteringCreditCard';
import type { CreditCard } from '../types/CreditCard';
import { CreditCardView } from './CreditCardView';
import { Text } from './common/Text';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;

  height: 100%;

  padding: 130px 28px 28px 28px;
`;

const NickNameInput = styled.input`
  width: 75%;

  border: none;
  border-bottom: solid 1.5px #737373;

  font-size: 18px;
  text-align: center;

  margin-top: 120px;
`;

const NextButton = styled.button`
  align-self: flex-end;
  margin-top: auto;
`;

export const AddNickNamePageContent = () => {
  const { resisteringCreditCard } = useResisteringCreditCard();

  const { addCreditCard } = useCreditCards();

  const [newCard, setNewCard] = useState<CreditCard>(resisteringCreditCard);

  const navigate = useNavigate();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCard({ ...newCard, nickName: event.target.value });
  };

  const handleClickButton = () => {
    addCreditCard(newCard);

    navigate('/');
  };

  return (
    <Container>
      <Text size="largest" weight="light">
        카드별칭을 지정해주세요.
      </Text>
      <CreditCardView
        cardCompany={newCard.cardCompany}
        cardNumbers={newCard.cardNumbers}
        expirationDate={newCard.expirationDate}
        name={newCard.name}
      />
      <NickNameInput
        onChange={handleChangeInput}
        maxLength={10}
        placeholder="10자 이내로 입력해주세요."
      />
      {newCard.nickName !== '' && (
        <NextButton onClick={handleClickButton}>
          <Text weight="bold">등록</Text>
        </NextButton>
      )}
    </Container>
  );
};
