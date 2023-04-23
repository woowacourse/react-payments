import styled from 'styled-components';
import { FormEvent, useState } from 'react';
import CardNumberInput from './FormInputs/CardNumberInput';
import ExpirationDateInput from './FormInputs/ExpirationDateInput';
import NameInput from './FormInputs/NameInput';
import PasswordInput from './FormInputs/PasswordInput';
import SecurityCodeInput from './FormInputs/SecurityCodeInput';
import CardPreview from './CardPreview';
import Header from '../Header';
import { Card } from 'types/Card';
import { useHandleForm } from 'hooks/useHandleForm';

const CardRegisterForm = () => {
  const [cardNumber, setCardNumber] = useState({
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  });

  const [date, setDate] = useState({
    month: '',
    year: '',
  });

  const [name, setName] = useState('');

  const cardInfo: Card = { ...cardNumber, ...date, name };

  const { handleForm } = useHandleForm();

  return (
    <div>
      <Header navigator title="카드 추가" />

      <CardPreview cardInfo={cardInfo} />

      <form onSubmit={handleForm}>
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
        <ExpirationDateInput date={date} setDate={setDate} />
        <NameInput name={name} setName={setName} />
        <SecurityCodeInput />
        <PasswordInput />

        <S.Button>다음</S.Button>
      </form>
    </div>
  );
};

const S = {
  Button: styled.button`
    display: flex;
    margin: 38px 0 30px auto;
    padding: 10px 16px;
    color: var(--darken-color);
    border: 1px solid var(--darken-color);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    background: none;
    cursor: pointer;
  `,
};

export default CardRegisterForm;
