import React, { Fragment } from 'react';

import Input from './common/Input';
import InputField from './common/InputField';

import { ADD_CARD_FORM_CONDITION, CREATE_MASKED_CHARACTERS } from '../constants';

export default function CardNumberInput({ cardNumber, onChange }) {
  return (
    <InputField
      labelText="카드 번호"
      wrapperWidth="100%"
      horizontalAlign="space-around"
      isComplete={
        cardNumber.join('').length ===
        ADD_CARD_FORM_CONDITION.NUMBER_UNIT_COUNT * ADD_CARD_FORM_CONDITION.NUMBER_UNIT_LENGTH
      }>
      {Array.from({ length: ADD_CARD_FORM_CONDITION.NUMBER_UNIT_COUNT }).map((_, index) => (
        <Fragment key={index}>
          <Input
            type={index <= 1 ? 'number' : 'password'}
            value={cardNumber[index]}
            maxLength="4"
            placeholder={index <= 1 ? '1 2 3 4' : CREATE_MASKED_CHARACTERS(4)}
            onChange={e => onChange(e.target.value, index)}
            isComplete={cardNumber[index].length === 4}
          />
          {index < ADD_CARD_FORM_CONDITION.NUMBER_UNIT_COUNT - 1 && cardNumber[index].length === 4 && <p>-</p>}
        </Fragment>
      ))}
    </InputField>
  );
}
