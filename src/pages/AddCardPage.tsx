import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import FormCardAdd from '../components/FormCardAdd';
import Header from '../components/Header';
import useCardNumber from '../hooks/useCardNumber';
import usePasswordInput from '../hooks/usePasswordInput';
import { formatExpireDate, handleNumberInput, isAlphabetInput, isNumberInput } from '../utils/util';

import './AddCardPage.css';

const AddCardPage = () => {
  const [cardType, setCardType] = useState('현대');
  const [cardNumber, onChangeCardNumber] = usePasswordInput({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [cardOwner, setCardOwner] = useState('');
  const [cardExpireDate, setCardExpireDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword1, setCardPassword1] = useState('');
  const [cardPassword2, setCardPassword2] = useState('');

  const cardExpireData = {
    value: cardExpireDate,
    onChange: (e: any) => {
      const lastWord = e.target.value[e.target.value.length - 1];

      if (e.target.value.length > 5) return;
      if (e.target.value.length > 0 && !isNumberInput(lastWord)) return;
      setCardExpireDate(formatExpireDate(e.target.value));
    },
    status: false,
  };

  const cardOwnerData = {
    value: cardOwner,
    onChange: (e: any) => {
      const lastWord = e.target.value[e.target.value.length - 1];

      if (e.target.value.length > 30) return;
      if (e.target.value.length > 0 && !isAlphabetInput(lastWord.toUpperCase())) return;
      setCardOwner(e.target.value.toUpperCase());
    },
    status: false,
  };

  const securityCodeData = {
    value: securityCode,
    onChange: (e: any) => {
      if (e.target.value.length > 3) return;
      setSecurityCode(handleNumberInput(e.target.value));
    },
    status: false,
  };

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

  const navigate = useNavigate();

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
          expired={cardExpireDate}
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
