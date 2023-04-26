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
  onCardNumberChange,
  expireMonth,
  expireYear,
  cardOwner,
  securityCode,
  cardPassword1,
  cardPassword2,
}: FormCardAddProps) => {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      sumbitCard(
        '현대',
        cardNumber,
        cardOwner.value,
        expireMonth.value,
        expireYear.value,
        securityCode.value,
        {
          first: cardPassword1.value,
          second: cardPassword2.value,
        }
      );
      navigate('/');
    } catch (error) {
      alert('중복된 카드 입니다.');
      return;
    }
  };

  return (
    <form className="add-card-form" onSubmit={onSubmit}>
      <AddCardNumberInput cardNumber={cardNumber} onChange={onCardNumberChange} />
      <AddCardExpireDateInput expireMonth={expireMonth} expireYear={expireYear} />
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
