import { useState } from 'react';
import Card from '../Common/Card';
import CardNumberInput from '../Input/CardNumberInput';
import ExpireDateInput from '../Input/ExpireDateInput';
import OwnerNameInput from '../Input/OwnerNameInput';
import SecurityCodeInput from '../Input/SecurityCodeInput';
import CardPasswordInput from '../Input/CardPasswordInput';
import styled from 'styled-components';
import { CardType } from '../../types';
import PageTemplate from '../Template/PageTemplate';

interface CardRegisterPageProps {
  navigate: (page: string) => void;
}

const CardRegisterPage = ({ navigate }: CardRegisterPageProps) => {
  const [cardNumber, setCardNumber] = useState<string[]>(Array(4).fill(''));
  const [expireDate, setExpireDate] = useState<string[]>(Array(2).fill(''));
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword1, setCardPassword1] = useState('');
  const [cardPassword2, setCardPassword2] = useState('');

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

    console.log(newCard);

    const cardList: CardType[] = JSON.parse(localStorage.getItem('cardList') || '[]');
    console.log(cardList);
    cardList.push(newCard);
    localStorage.setItem('cardList', JSON.stringify(cardList));
    navigate('list');
  };

  const onClickBack = () => {
    navigate('list');
  };

  return (
    <PageTemplate title={'카드 추가'} onClickBack={onClickBack}>
      <Card cardNumber={cardNumber} ownerName={ownerName} expireDate={expireDate} />
      <InputForm onSubmit={submitNewCard}>
        <CardNumberInput
          inputValues={cardNumber}
          setInputValues={(val) => setCardNumber(val as string[])}
        />
        <ExpireDateInput
          inputValues={expireDate}
          setInputValues={(val) => setExpireDate(val as string[])}
        />
        <OwnerNameInput
          inputValues={ownerName}
          setInputValues={(val) => setOwnerName(val as string)}
        />
        <SecurityCodeInput
          inputValues={securityCode}
          setInputValues={(val) => setSecurityCode(val as string)}
        />
        <CardPasswordInput
          cardPassword1Props={{
            inputValues: cardPassword1,
            setInputValues: (val) => setCardPassword1(val as string),
          }}
          cardPassword2Props={{
            inputValues: cardPassword2,
            setInputValues: (val) => setCardPassword2(val as string),
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
