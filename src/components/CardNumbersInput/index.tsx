import React, { ChangeEvent, useEffect, useState } from 'react';

import {
  CARD_NUMBERS,
  CARD_NUMBERS_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../constants';
import { CardMark } from '../../modules/useCardInfoReducer';
import CardInput from '../CardInput';
import CardInputContainer from '../CardInputContainer';
import FormErrorMessage from '../FormErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

const NUMBERS_NAME_PREFIX = 'numbers_';

interface CardNumbersInputProps {
  editCardMark: (mark: CardMark) => void;
  editCardNumbers: (number: string) => void;
}

export default function CardNumbersInput(props: CardNumbersInputProps) {
  const { editCardMark, editCardNumbers } = props;
  const { length, startNumber, endNumber } = CARD_NUMBERS;
  const { title, subTitle, label, placeholder } = CARD_NUMBERS_FORM_MESSAGE;

  const [validatedNumbers, setValidatedNumbers] = useState<
    (number | undefined)[]
  >(Array.from({ length }, () => undefined));

  const [numbersError, setNumbersError] = useState<boolean[]>(
    Array.from({ length }, () => false),
  );

  const pickCardMark = (): CardMark => {
    const numberText = validatedNumbers.join('');

    if (/^4\d{15}$/.test(numberText)) {
      return 'visa';
    }
    if (/^5[1-5]\d{14}/.test(numberText)) {
      return 'master';
    }
    return 'etc';
  };

  const changeNumbersError = (newNumbers: (number | undefined)[]) => {
    const newNumbersError = newNumbers.map((item) => !item);

    setNumbersError(newNumbersError);
  };

  const changeNumbersState = (index: number, value: string) => {
    const regex = new RegExp(`^[${startNumber}-${endNumber}]{${length}}$`);
    const newNumbers = [...validatedNumbers];
    newNumbers[index] = regex.test(value) ? Number(value) : undefined;

    setValidatedNumbers(newNumbers);
    changeNumbersError(newNumbers);
  };

  const isValidatedCardNumber = () => numbersError.every((i) => !i);

  const validateCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    const { value, name } = event.target;
    const index = Number(name.replace(NUMBERS_NAME_PREFIX, ''));

    changeNumbersState(index, value);
  };

  const getErrorMessage = () => {
    if (!isValidatedCardNumber()) return ERROR_MESSAGE.cardNumber;
    return undefined;
  };

  useEffect(() => {
    editCardNumbers(validatedNumbers.join());
    editCardMark(pickCardMark());
  }, [validatedNumbers]);

  return (
    <CardInputContainer title={title} subTitle={subTitle}>
      <CardInput label={label}>
        <div className={styles.inputWrap} onChange={validateCardNumber}>
          {Array.from({ length }).map((_, index) => (
            <Input
              placeholder={placeholder}
              name={`${NUMBERS_NAME_PREFIX}${index}`}
              type="text"
              maxLength={length}
              error={numbersError[index]}
            />
          ))}
        </div>
      </CardInput>
      <FormErrorMessage errorMessage={getErrorMessage()} />
    </CardInputContainer>
  );
}
