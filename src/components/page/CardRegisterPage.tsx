import type { CardType } from '../../types';
import { Page } from '../../types';
import { useState } from 'react';
import styled from 'styled-components';

import PageTemplate from '../template/PageTemplate';
import CardNumberInput from '../box/inputSection/CardNumberInput';
import ExpireDateInput from '../box/inputSection/ExpireDateInput';
import OwnerNameInput from '../box/inputSection/OwnerNameInput';
import SecurityCodeInput from '../box/inputSection/SecurityCodeInput';
import CardPasswordInput from '../box/inputSection/CardPasswordInput';
import Card from '../common/Card';

import useList from '../../utils/useList';

interface Props {
  navigate: (page: Page) => void;
}

const CardRegisterPage = ({ navigate }: Props) => {
  const [cardNumber, setCardNumberIndex] = useList(['', '', '', '']);
  const [expireDate, setExpireDateIndex] = useList(['', '']);
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword, setCardPasswordIndex] = useList(['', '']);

  const submitNewCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: CardType = {
      id: Date.now(),
      cardNumber,
      expireDate,
      ownerName,
      securityCode,
      cardPassword,
    };

    const cardList: CardType[] = JSON.parse(localStorage.getItem('cardList') || '[]');
    cardList.push(newCard);
    localStorage.setItem('cardList', JSON.stringify(cardList));
    navigate(Page.list);
  };

  const onClickBack = () => {
    navigate(Page.list);
  };

  return (
    <PageTemplate title="카드 추가" onClickBack={onClickBack}>
      <Card cardNumber={cardNumber} ownerName={ownerName} expireDate={expireDate} />
      <InputForm onSubmit={submitNewCard}>
        <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumberIndex} />
        <ExpireDateInput expireDate={expireDate} setExpireDateIndex={setExpireDateIndex} />
        <OwnerNameInput ownerName={ownerName} setOwnerName={setOwnerName} />
        <SecurityCodeInput securityCode={securityCode} setSecurityCode={setSecurityCode} />
        <CardPasswordInput cardPassword={cardPassword} setCardPasswordIndex={setCardPasswordIndex} />
        <ButtonWrapper>
          <SubmitButton type="submit">다음</SubmitButton>
        </ButtonWrapper>
      </InputForm>
    </PageTemplate>
  );
};

export default CardRegisterPage;

const InputForm = styled.form`
  width: 100%;

  margin-top: 28px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #000000;
  background-color: transparent;
  border: none;
  height: 34px;

  cursor: pointer;
`;
