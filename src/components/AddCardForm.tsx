import React from 'react';

import type { FormCardAddProps } from '../type';
import { sumbitCard } from '../utils/applicationUtil';
import { useNavigate } from 'react-router-dom';
import AddCardNumberInput from './AddCardNumberInput';
import AddCardExpireDateInput from './AddCardExpireDateInput';
import AddCardOwnerInput from './AddCardOwnerInput';
import AddCardSecurityCodeInput from './AddCardSecurityCodeInput';
import AddCardPasswordInput from './AddCardPasswordInput';
import './AddCardForm.css';

const AddCardForm = ({
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
    try {
      sumbitCard('현대', cardNumber.value, cardOwner.value, cardExpire.value, securityCode.value, {
        first: cardPassword1.value,
        second: cardPassword2.value,
      });
    } catch (error) {
      alert('중복된 카드 입니다.');
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

export default AddCardForm;
