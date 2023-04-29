import { useState } from 'react';
import Card from '../Card/Card';
import CardNumberInput from '../CardNumberInput';
import CardOwnerInput from '../CardOwnerInput';
import CardPasswordInput from '../CardPasswordInput';
import ExpirationDateInput from '../ExpirationDateInput';
import SecurityCodeInput from '../SecurityCodeInput';
import styled from 'styled-components';
import useOnChangeHandler from './hooks/useOnChangeHandler';
import type { CardInformation } from '../../domain/types/card';

const CardRegistrationForm = () => {
  const [cardNumber, setCardNumber] = useState<CardInformation['cardNumber']>(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState<CardInformation['expirationDate']>(['', '']);
  const [owner, setOwner] = useState<CardInformation['owner']>('');

  const onChangeCardNumber = useOnChangeHandler({
    setState: setCardNumber,
    count: 4,
  });

  const onChangeExpiraiontDate = useOnChangeHandler({
    setState: setExpirationDate,
    count: 2,
  });

  return (
    <Styled.FormWrapper>
      <Styled.CardWrapper>
        <Card cardType="우리카드" owner={owner} cardNumber={cardNumber} expirationDate={expirationDate} />
      </Styled.CardWrapper>
      <CardNumberInput onChange={onChangeCardNumber} />
      <ExpirationDateInput onChange={onChangeExpiraiontDate} />
      <CardOwnerInput owner={owner} onChange={(e) => setOwner(e.target.value)} />
      <SecurityCodeInput />
      <CardPasswordInput />
      <SubmitButton>다음</SubmitButton>
    </Styled.FormWrapper>
  );
};

export default CardRegistrationForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
`;

const CardWrapper = styled.div`
  align-self: center;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  border-radius: 7px;
  background-color: #2bc1bc;
  color: white;

  :disabled {
    background-color: #ecebf1;
    color: #737373;
  }
`;

const Styled = {
  FormWrapper,
  CardWrapper,
  SubmitButton,
};
