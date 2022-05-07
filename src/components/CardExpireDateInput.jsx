import React from 'react';

import Input from './common/Input.jsx';
import InputField from './common/InputField.jsx';

import { ADD_CARD_FORM_CONDITION, ADD_CARD_FORM_ERROR_MESSAGE } from '../constants';

export default function CardExpireDateInput({ expireDate, onChange, isInvalid }) {
  return (
    <InputField
      labelText="만료일 (MM/YY)"
      wrapperWidth="135px"
      horizontalAlign="center"
      isComplete={expireDate.join('').length === ADD_CARD_FORM_CONDITION.EXPIRE_DATE_LENGTH}
      isError={isInvalid}
      errorMessage={ADD_CARD_FORM_ERROR_MESSAGE.EXPIRE_DATE}>
      <Input
        placeholder="MM"
        type="text"
        value={expireDate[0]}
        onChange={e => onChange(e.target.value, 0)}
        width="40px"
        isComplete={expireDate[0].length === 2}
        data-testid={'card-expire-month-input'}
      />
      <p>/</p>
      <Input
        placeholder="YY"
        type="text"
        value={expireDate[1]}
        onChange={e => onChange(e.target.value, 1)}
        width="40px"
        isComplete={expireDate[1].length === 2}
        data-testid={'card-expire-year-input'}
      />
    </InputField>
  );
}
