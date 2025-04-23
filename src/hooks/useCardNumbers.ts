import { useRef, useState } from 'react';
import { INITIAL_CARD_NUMBER } from '../constants';
import { CardNumberType } from '../types';

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);
  const inputRefs = {
    first: useRef<HTMLInputElement>(null),
    second: useRef<HTMLInputElement>(null),
    third: useRef<HTMLInputElement>(null),
    fourth: useRef<HTMLInputElement>(null)
  };

  const handleCardNumberChange = (field: keyof CardNumberType, value: string) => {
    const isError = !Number.isInteger(+value);

    setCardNumbers((prev) => ({
      ...prev,
      [field]: { value, isError }
    }));

    if (field == 'fourth' || value.length !== 4) {
      return;
    }

    handleFocusMove(field);
  };

  const handleFocusMove = (field: keyof CardNumberType) => {
    const keys = Object.keys(inputRefs);
    const nextKey = keys[keys.indexOf(field) + 1] as keyof typeof inputRefs;
    inputRefs[nextKey].current!.focus();
  };

  const getCardNumberErrorMessage = (cardNumbers: CardNumberType) => {
    const hasError = Object.values(cardNumbers).some(({ isError }) => isError);
    return hasError ? '숫자만 입력 가능합니다.' : '';
  };

  return { inputRefs, handleCardNumberChange, cardNumbers, getCardNumberErrorMessage };
};

export default useCardNumbers;
