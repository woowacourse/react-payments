import type { CardType } from '../../types';
import { Page } from '../../types';
import { useState } from 'react';
import styled from 'styled-components';

import Card from '../common/Card';
import CardNumberInput from '../box/inputSection/CardNumberInput';
import ExpireDateInput from '../box/inputSection/ExpireDateInput';
import OwnerNameInput from '../box/inputSection/OwnerNameInput';
import SecurityCodeInput from '../box/inputSection/SecurityCodeInput';
import CardPasswordInput from '../box/inputSection/CardPasswordInput';
import PageTemplate from '../template/PageTemplate';

interface Props {
  navigate: (page: Page) => void;
}

interface CardFormState extends Omit<CardType, 'id' | 'cardPassword'> {
  cardPassword1: string;
  cardPassword2: string;
}

const CardRegisterPage = ({ navigate }: Props) => {
  const [card, setCard] = useState<CardFormState>({
    cardNumber: ['', '', '', ''],
    expireDate: ['', ''],
    ownerName: '',
    securityCode: '',
    cardPassword1: '',
    cardPassword2: '',
  });

  const submitNewCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: CardType = {
      id: Date.now(),
      cardNumber,
      expireDate,
      ownerName,
      securityCode,
      cardPassword: cardPassword1 + cardPassword2,
    };

    const cardList: CardType[] = JSON.parse(localStorage.getItem('cardList') || '[]');
    cardList.push(newCard);
    localStorage.setItem('cardList', JSON.stringify(cardList));
    navigate(Page.list);
  };

  const onClickBack = () => {
    navigate(Page.list);
  };

  const onChange = (key: keyof CardFormState) => (value: string | string[]) => {
    setCard((prev) => ({ ...prev, [key]: value }));
  };

  const { cardNumber, expireDate, ownerName, securityCode, cardPassword1, cardPassword2 } = card;

  return (
    <PageTemplate title="카드 추가" onClickBack={onClickBack}>
      <Card cardNumber={cardNumber} ownerName={ownerName} expireDate={expireDate} />
      <InputForm onSubmit={submitNewCard}>
        <CardNumberInput inputValues={cardNumber} setInputValues={onChange('cardNumber')} />
        <ExpireDateInput inputValues={expireDate} setInputValues={onChange('expireDate')} />
        <OwnerNameInput inputValues={ownerName} setInputValues={onChange('ownerName')} />
        <SecurityCodeInput inputValues={securityCode} setInputValues={onChange('securityCode')} />
        <CardPasswordInput
          cardPassword1Props={{
            inputValues: cardPassword1,
            setInputValues: onChange('cardPassword1'),
          }}
          cardPassword2Props={{
            inputValues: cardPassword2,
            setInputValues: onChange('cardPassword2'),
          }}
        />
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
