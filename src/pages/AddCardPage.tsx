import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { CardNumber, InputHook } from '../type';
import Card from '../components/Card';
import AddCardForm from '../components/AddCardForm';
import Header from '../components/Header';
import useInput from '../hooks/useInput';
import usePasswordInput from '../hooks/usePasswordInput';
import {
  formatExpireDate,
  handleNumberInput,
  isNumberInput,
  stringToUpperCase,
} from '../utils/util';
import {
  cardExpireCondition,
  securityCodeCondition,
  cardOwnerCondition,
  cardPasswordCondition,
} from './cardInputCondition';
import './AddCardPage.css';

const AddCardPage = () => {
  const navigate = useNavigate();
  const [cardType] = useState('현대');

  const [cardNumber, onChangeCardNumber] = usePasswordInput<CardNumber>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const cardExpire = useInput('', cardExpireCondition, formatExpireDate);
  const securityCode = useInput('', securityCodeCondition, handleNumberInput);
  const cardOwner = useInput('', cardOwnerCondition, stringToUpperCase);
  const cardPassword1 = useInput('', cardPasswordCondition, handleNumberInput);
  const cardPassword2 = useInput('', cardPasswordCondition, handleNumberInput);

  const onBackButtonClick = () => {
    navigate('/');
  };

  const cardNumberProps: InputHook<CardNumber> = {
    value: cardNumber,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const lastWord = e.target.value[e.target.value.length - 1];

      if (e.target.value.length > 4) return;
      if (e.target.value.length > 0 && !isNumberInput(lastWord)) return;

      onChangeCardNumber(e);
    },
  };

  return (
    <div className="add-card-page">
      <Header>
        <button className="back-button" onClick={onBackButtonClick}>
          {'<'}
        </button>
        <h3>카드 추가</h3>
      </Header>
      <section className="add-card-page-body">
        <Card
          cardType={cardType}
          cardNumber={cardNumber}
          cardOwner={cardOwner.value}
          expired={cardExpire.value}
        />
        <AddCardForm
          cardNumber={cardNumberProps}
          cardExpire={cardExpire}
          cardOwner={cardOwner}
          securityCode={securityCode}
          cardPassword1={cardPassword1}
          cardPassword2={cardPassword2}
        />
      </section>
    </div>
  );
};

export default AddCardPage;
