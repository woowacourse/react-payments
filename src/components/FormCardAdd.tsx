import React from 'react';

import { fetchData } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom';
import './FormCardAdd.css';
import { CardType, FormCardAddProps } from '../type';
import AddCardNumberInput from './AddCardNumberInput';
import AddCardExpireDateInput from './AddCardExpireDateInput';
import AddCardOwnerInput from './AddCardOwnerInput';
import AddCardSecurityCodeInput from './AddCardSecurityCodeInput';
import AddCardPasswordInput from './AddCardPasswordInput';

const FormCardAdd = ({
  cardNumber,
  cardExpire,
  cardOwner,
  securityCode,
  cardPassword1,
  cardPassword2,
}: FormCardAddProps) => {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { first, second, third, fourth } = cardNumber.value;

    const postData: Omit<CardType, 'id'> = {
      cardType: '현대',
      cardNumber: {
        first,
        second,
        third,
        fourth,
      },
      cardOwner: cardOwner.value,
      expired: cardExpire.value,
      securityCode: securityCode.value,
      cardPassword: {
        first: cardPassword1.value,
        second: cardPassword2.value,
      },
    };
    if (!fetchData(postData)) {
      alert('이미 등록된 카드입니다.');
      return;
    }
    navigate('/');
  };

  return (
    <form className="add-card-form" onSubmit={onSubmit}>
      <AddCardNumberInput cardNumber={cardNumber} />
      <AddCardExpireDateInput cardExpire={cardExpire} />
      <AddCardOwnerInput cardOwner={cardOwner} />
      <AddCardSecurityCodeInput securityCode={securityCode} />
      <AddCardPasswordInput cardPassword1={cardPassword1} cardPassword2={cardPassword2} />
      <div className="add-card-submit">
        <button type="submit">다음</button>
      </div>
    </form>
  );
};

export default FormCardAdd;
