import React, { useEffect, useRef, useState } from 'react';

import Input from './common/Input';
import InputField from './common/InputField';

import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from '../constants';

export default function CardNumberInput({ cardNumber, onChange }) {
  const [focusInputIndex, setFocusInputIndex] = useState(0);
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[focusInputIndex].value.length === 4) {
      const index = cardNumber.findIndex(cardNumberUnit => cardNumberUnit.length !== 4);
      inputRef.current[index]?.focus();
    }
  }, [cardNumber, focusInputIndex]);

  useEffect(() => {
    inputRef.current[focusInputIndex].focus();
  }, [focusInputIndex]);

  return (
    <InputField
      labelText="카드 번호"
      wrapperWidth="100%"
      horizontalAlign="space-around"
      isComplete={
        cardNumber.join('').length === CARD_INFO_RULES.NUMBER_UNIT_COUNT * CARD_INFO_RULES.NUMBER_UNIT_LENGTH
      }>
      {Array.from({ length: CARD_INFO_RULES.NUMBER_UNIT_COUNT }).map((_, index) => (
        <Input
          key={index}
          type={index <= 1 ? 'number' : 'password'}
          value={cardNumber[index]}
          ref={element => (inputRef.current[index] = element)}
          placeholder={index <= 1 ? '1 2 3 4' : CREATE_MASKED_CHARACTERS(4)}
          onChange={e => onChange(e, index)}
          onFocus={() => setFocusInputIndex(index)}
          isComplete={cardNumber[index].length === 4}
          showPostFix={index < CARD_INFO_RULES.NUMBER_UNIT_COUNT - 1 && cardNumber[index].length === 4}
          postfix={'-'}
        />
      ))}
    </InputField>
  );
}
