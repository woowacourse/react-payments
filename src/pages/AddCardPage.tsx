import React, { useState } from 'react';
import Card from '../components/Card';
import FormCardAdd from '../components/FormCardAdd';

const AddCardPage = () => {
  const [cardType, setCardType] = useState('현대');
  const [cardNumber, setCardNumber] = useState('');
  const [cardOwner, setCardOwner] = useState('');
  const [cardExpireDate, setCardExpireDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardPassword1, setCardPassword1] = useState('');
  const [cardPassword2, setCardPassword2] = useState('');

  return (
    <div>
      <div>
        <button>{'<'}</button>
        <h3>뒤로 가기</h3>
      </div>
      <Card
        cardType={cardType}
        cardNumber={cardNumber}
        cardOwner={cardOwner}
        expireDate={cardExpireDate}
      />
      <FormCardAdd />
    </div>
  );
};
