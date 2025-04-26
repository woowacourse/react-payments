import { useRef, useState } from 'react';
import { INITIAL_CARD_NUMBER } from '../constants';
import { CardNumberType } from '../types';
import { isNumber } from '../utils/isNumber';

const isValidCardNumberLength = (value: string) => value.length === 0 || value.length === 4;

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<CardNumberType>(INITIAL_CARD_NUMBER);
  const cardInputRefs = {
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
      [field]: { value, isError: !isValidCardNumberLength(value) }
    }));

    if (field == 'fourth' || value.length !== 4) {
      return;
    }

    handleFocusMove(field);
  };

  const handleFocusMove = (field: keyof CardNumberType) => {
    const keys = Object.keys(cardInputRefs);
    const nextKey = keys[keys.indexOf(field) + 1] as keyof typeof cardInputRefs;
    cardInputRefs[nextKey].current!.focus();
  };

  const getCardNumberErrorMessage = (cardNumbers: CardNumberType) => {
    for (const { value } of Object.values(cardNumbers)) {
      if (!isValidCardNumberLength(value)) {
        return ERROR_MESSAGES.INVALID_LENGTH;
      }
    }

    return '';
  };

  return { cardInputRefs, handleCardNumbersChange, cardNumbers, getCardNumberErrorMessage };
};

export default useCardNumbers;

export const ERROR_MESSAGES = {
  INVALID_LENGTH: '4자리 숫자를 입력해주세요.'
};
