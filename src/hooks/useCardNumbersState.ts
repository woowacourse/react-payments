import { useRef, useState } from 'react';
import { CardNumberType } from '../types';
import { INITIAL_CARD_NUMBER } from '../constants';
import { isNumber } from '../utils/isNumber';
import focusNextInputIfFilled from '../utils/focusNextInputIfFilled';
import { isValidCardNumber } from '../validation/validateCardNumbers';

export const useCardNumbersState = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);
  const inputRefs = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
    third: useRef<HTMLInputElement>(null),
    fourth: useRef<HTMLInputElement>(null)
  };

  const handleCardNumbersChange = (field: keyof CardNumberType, value: string) => {
    if (value !== '' && !isNumber(value)) {
      return;
    }
    setCardNumbers((prev) => ({
      ...prev,
      [field]: { value, isError: !isValidCardNumber(value) }
    }));

    const keys = Object.keys(inputRefs);

    focusNextInputIfFilled({ refs: Object.values(inputRefs), currentIndex: keys.indexOf(field), value, maxLength: 4 });
  };
  return { cardNumbers, handleCardNumbersChange, inputRefs };
};
