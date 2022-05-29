import React from 'react';

import Input from './common/Input';
import InputField from './common/InputField';

import { ADD_CARD_FORM_ERROR_MESSAGE } from '../constants/index';

interface Props {
  expireDate: string[];
  onChange: (value?: string, index?: number) => void;
  isInvalid: boolean;
  isComplete: boolean;
}

export default function CardExpireDateInput({ expireDate, onChange, isInvalid, isComplete }: Props) {
  const onChangeWithParsedValue = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    let parsedValue = value;
    if (parsedValue.startsWith('0')) parsedValue = parsedValue.slice(1);
    if (parsedValue.length > 1) parsedValue = parsedValue.slice(-2);

    onChange(parsedValue.length === 1 && Number(parsedValue) !== 0 ? `0${parsedValue}` : parsedValue, index);
  };

  return (
    <InputField
      labelText="만료일 (MM/YY)"
      wrapperWidth="135px"
      horizontalAlign="center"
      isComplete={isComplete}
      isError={isInvalid}
      errorMessage={ADD_CARD_FORM_ERROR_MESSAGE.EXPIRE_DATE}>
      <Input
        placeholder="MM"
        type="text"
        value={expireDate[0]}
        onChange={e => onChangeWithParsedValue(e, 0)}
        width="40px"
        data-testid={'card-expire-month-input'}
      />
      <p>/</p>
      <Input
        placeholder="YY"
        type="text"
        value={expireDate[1]}
        onChange={e => onChangeWithParsedValue(e, 1)}
        width="40px"
        data-testid={'card-expire-year-input'}
      />
    </InputField>
  );
}
