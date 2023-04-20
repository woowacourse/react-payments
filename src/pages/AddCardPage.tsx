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

const AddCardPage = () => {
  const navigate = useNavigate();
  const [cardType, setCardType] = useState('현대');

  const [cardNumber, onChangeCardNumber] = usePasswordInput({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const cardExpireData = useInput('', cardExpireCondition, formatExpireDate);
  const securityCodeData = useInput('', securityCodeCondition, handleNumberInput);
  const cardOwnerData = useInput('', cardOwnerCondition, stringToUpperCase);

  const [cardOwner, setCardOwner] = useState('');
  const [cardPassword1, setCardPassword1] = useState('');
  const [cardPassword2, setCardPassword2] = useState('');

  const cardPassword1Data = {
    value: cardPassword1,
    onChange: (e: any) => {
      if (e.target.value.length > 1) return;
      setCardPassword1(handleNumberInput(e.target.value));
    },
    status: false,
  };

  const cardPassword2Data = {
    value: cardPassword2,
    onChange: (e: any) => {
      if (e.target.value.length > 1) return;
      setCardPassword2(handleNumberInput(e.target.value));
    },
    status: false,
  };

  const onBackButtonClick = () => {
    navigate('/');
  };

  const cardNumberData = {
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
          cardOwner={cardOwner}
          expired={cardExpireData.value}
        />
        <FormCardAdd
          cardNumberData={cardNumberData}
          cardNData={cardNumberData}
          cardExpireData={cardExpireData}
          cardOwnerData={cardOwnerData}
          securityCodeData={securityCodeData}
          cardPassword1Data={cardPassword1Data}
          cardPassword2Data={cardPassword2Data}
        />
      </section>
    </div>
  );
};

export default AddCardPage;
