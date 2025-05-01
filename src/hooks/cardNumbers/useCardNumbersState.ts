import { useState } from 'react';
import { CardNumberType } from '../../types';
import { INITIAL_CARD_NUMBER } from '../../constants';
import { isNumber } from '../../utils/isNumber';
import { validateCardNumber } from '../../validation/validateCardNumbers';
import focusNextInputIfFilled from '../../utils/focusNextInputIfFilled';
import { useCardNumbersRef } from './useCardNumbersRef';

export const useCardNumbersState = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);
  const { isValid } = validateCardNumber(cardNumbers);
  const { inputRefs } = useCardNumbersRef();

  const handleCardNumbersChange = (field: keyof CardNumberType, value: string) => {
    if (value !== '' && !isNumber(value)) {
      return;
    }
    setCardNumbers((prev) => ({
      ...prev,
      [field]: { value, isError: isValid }
    }));

    const keys = Object.keys(inputRefs);

    focusNextInputIfFilled({ refs: Object.values(inputRefs), currentIndex: keys.indexOf(field), value, maxLength: 4 });
  };
  return { cardNumbers, handleCardNumbersChange, inputRefs };
};
