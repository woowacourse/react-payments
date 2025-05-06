import { useRef, useState } from 'react';
import { CardNumberType } from '../types';
import { INITIAL_CARD_NUMBER } from '../constants';
import focusNextInputIfFilled from '../utils/focusNextInputIfFilled';
import { isValidCardNumber } from '../validation/validateCardNumbers';

export const useCardNumbersState = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);
  return { cardNumbers, setCardNumbers };
};

export const useCardNumbersFocus = () => {
  const inputRefs = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
    third: useRef<HTMLInputElement>(null),
    fourth: useRef<HTMLInputElement>(null)
  };

  const focusIfNeeded = (field: keyof CardNumberType, value: string) => {
    const keys = Object.keys(inputRefs);
    focusNextInputIfFilled({
      refs: Object.values(inputRefs),
      currentIndex: keys.indexOf(field),
      value,
      maxLength: 4
    });
  };

  return { inputRefs, focusIfNeeded };
};
export const useCardNumbersValidation = () => {
  const validate = (value: string) => {
    return isValidCardNumber(value);
  };
  return { validate };
};
