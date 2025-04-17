import { useState, ChangeEvent } from 'react';
import { CardNumber, CardNumberError } from './types';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_NUMBER_ERROR } from '../constants';

export const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState<CardNumber>({
    first: null,
    second: null,
    third: null,
    forth: null,
  });

  const [cardNumberError, setCardNumberError] = useState<CardNumberError>({
    first: false,
    second: false,
    third: false,
    forth: false,
  });

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const isNumber = isOnlyDigits(value);

    if (isNumber) {
      setCardNumber({
        ...cardNumber,
        [name]: value === '' ? null : Number(value),
      });
      setCardNumberError({
        ...cardNumberError,
        [name]: false,
      });
    } else {
      setCardNumberError({
        ...cardNumberError,
        [name]: true,
      });
    }
  };

  const resetCardNumber = () => {
    setCardNumber({
      first: null,
      second: null,
      third: null,
      forth: null,
    });
    setCardNumberError({
      first: false,
      second: false,
      third: false,
      forth: false,
    });
  };

  const isCardNumberValid = () => {
    const { first, second, third, forth } = cardNumber;
    return (
      first !== null &&
      second !== null &&
      third !== null &&
      forth !== null &&
      !cardNumberError.first &&
      !cardNumberError.second &&
      !cardNumberError.third &&
      !cardNumberError.forth
    );
  };

  const getCardNumberErrorMessage = (): string | null => {
    if (
      !cardNumberError.first &&
      !cardNumberError.second &&
      !cardNumberError.third &&
      !cardNumberError.forth
    ) {
      return null;
    }

    return CARD_NUMBER_ERROR.onlyNumbers;
  };

  return {
    cardNumber,
    cardNumberError,
    handleCardNumberChange,
    resetCardNumber,
    isCardNumberValid,
    getCardNumberErrorMessage,
  };
};
