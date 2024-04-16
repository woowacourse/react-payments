import React, { ChangeEvent, useState } from 'react';

import {
  CARD_NUMBERS,
  CARD_NUMBERS_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../constants';
import CardInputForm from '../CardInputForm';
import CardInputFormContainer from '../CardInputFormContainer';
import Input from '../Input';

const NUMBERS_NAME_PREFIX = 'numbers_';

export default function CardNumbersForm() {
  const { length, startNumber, endNumber } = CARD_NUMBERS;
  const { title, subTitle, label, placeholder } = CARD_NUMBERS_FORM_MESSAGE;
  const [validatedNumbers, setValidatedNumbers] = useState<boolean[]>(
    Array.from({ length }, () => false),
  );
  const validateCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const index = Number(name.replace(NUMBERS_NAME_PREFIX, ''));
    const regex = new RegExp(`^[${startNumber}-${endNumber}]{${length}}$`);
    // TODO: 함수로 빼기
    setValidatedNumbers((prev) => {
      prev.splice(index, 1, regex.test(value));
      return JSON.parse(JSON.stringify(prev));
    });
  };

  return (
    <CardInputFormContainer title={title} subTitle={subTitle}>
      <CardInputForm label={label}>
        <>
          {Array.from({ length }).map((_, index) => (
            <Input
              placeholder={placeholder}
              name={`${NUMBERS_NAME_PREFIX}${index}`}
              type="text"
              maxLength={length}
              extraHandleChange={validateCardNumber}
            />
          ))}
        </>
      </CardInputForm>
      <div>{validatedNumbers.some((i) => !i) && ERROR_MESSAGE.cardNumber}</div>
    </CardInputFormContainer>
  );
}
