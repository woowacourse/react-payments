import React from 'react';
import { useNavigate } from 'react-router-dom';

import type { AddCardFormProps, CardType } from '../../../type';
import { postLocalStorage as submitCard } from '../../../utils/applicationStorage';
import ExpireDateInput from './ExpireDateInput';
import OwnerInput from './OwnerInput';
import SecurityCodeInput from './SecurityCodeInput';
import PasswordInput from './PasswordInput';
import './AddCardForm.css';
import CardNumberInput from './CardNumberInput';
import useTotalStatus from '../../../hooks/useTotalStatus';
import { getSubmitData, getTotalStatus } from '../domain/domain';

const AddCardForm = (props: AddCardFormProps) => {
  const navigate = useNavigate();
  const isActive = useTotalStatus(getTotalStatus(props));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitData: Omit<CardType, 'id'> = getSubmitData(props);
    try {
      submitCard(submitData);
      navigate('/alias');
    } catch (error) {
      alert('중복된 카드 입니다.');
      return;
    }
  };

  return (
    <form className="add-card-form" onSubmit={onSubmit}>
      <CardNumberInput {...props} />
      <ExpireDateInput expireMonth={props.expireMonth} expireYear={props.expireYear} />
      <OwnerInput cardOwner={props.cardOwner} />
      <SecurityCodeInput securityCode={props.securityCode} />
      <PasswordInput cardPassword1={props.cardPassword1} cardPassword2={props.cardPassword2} />
      <div className="add-card-submit">{isActive && <button type="submit">다음</button>}</div>
    </form>
  );
};

export default AddCardForm;
