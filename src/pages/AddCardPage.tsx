import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import FormCardAdd from '../components/FormCardAdd';
import Header from '../components/Header';
import useCardNumber from '../hooks/useCardNumber';
import useInput from '../hooks/useInput';
import usePasswordInput from '../hooks/usePasswordInput';
import { formatExpireDate, handleNumberInput, isAlphabetInput, isNumberInput } from '../utils/util';

import './AddCardPage.css';

const cardExpireCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  const length = e.target.value.length;
  const lastWord = e.target.value[length - 1];
  return length <= 5 && length > 0 && (isNumberInput(lastWord) || lastWord === '/');
};

const securityCodeCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value.length <= 3;
};
const cardOwnerCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  const length = e.target.value.length;
  const lastWord = e.target.value[length - 1];
  return length <= 30 && !(length > 0 && !isAlphabetInput(lastWord.toUpperCase()));
};

const stringToUpperCase = (data: string): string => {
  return data.toUpperCase();
};

const cardPasswordCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
  return e.target.value.length <= 1;
};

const AddCardPage = () => {
  const navigate = useNavigate();
  const [cardType, setCardType] = useState('현대');

  const [cardNumber, onChangeCardNumber] = usePasswordInput({
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

  const cardNumberProps = {
    value: cardNumber,
    onChange: (e: any) => {
      const lastWord = e.target.value[e.target.value.length - 1];

      if (e.target.value.length > 4) return;
      if (e.target.value.length > 0 && !isNumberInput(lastWord)) return;

      onChangeCardNumber(e);
    },
    status: false,
  };

  return (
    <div className="add-card-page">
      <Header>
        <button className="back-button" onClick={onBackButtonClick}>
          {'<'}
        </button>
        <h3>뒤로 가기</h3>
      </Header>
      <section className="add-card-page-body">
        <Card
          cardType={cardType}
          cardNumber={cardNumber as any}
          cardOwner={cardOwner.value}
          expired={cardExpire.value}
        />
        <FormCardAdd
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
