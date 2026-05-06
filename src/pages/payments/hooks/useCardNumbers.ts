import { useState, type ChangeEvent } from 'react';

import { isNumericString } from '@/core/utils/validator';

import { validateCardNumber } from '../validator';

export const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [onBlurCardNumbers, setOnBlurCardNumbers] = useState([false, false, false, false]);

  const [cardNumbersInvalidAttemp, setCardNumbersInvalidAttemp] = useState([false, false, false, false]);
  // cardNumber --------------------------

  const preventCardNumber = (cardNumber: string) => {
    if (cardNumber !== '' && !isNumericString(cardNumber)) return true;
    if (cardNumber.length > 4) return true;
    return false;
  };

  const renderErrorMessageCardNumbers = (cardNumbers: string[]) => {
    if (cardNumbersInvalidAttemp.find(Boolean)) return '유효현 카드번호(숫자)를 입력해주세요';
    if (onBlurCardNumbers.every((blur) => !blur)) return '';
    if (cardNumbers.some((cardNumber) => cardNumber.length !== 4)) return '카드 번호를 전부 채워주세요';
    return '';
  };

  const renderErrorCardNumberInput = (index: number) => {
    const cardNumberInvalidAttempMessage = cardNumbersInvalidAttemp[index];
    if (cardNumberInvalidAttempMessage) return true;

    const cardNumber = cardNumbers[index];
    return onBlurCardNumbers.includes(true) && !validateCardNumber(cardNumber);
  };

  const handleChangeCardNumbers = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (preventCardNumber(value)) {
      setCardNumbersInvalidAttemp(
        cardNumbersInvalidAttemp.map((invalidAttemp: boolean, i: number) => {
          return Number(id) === i ? true : invalidAttemp;
        }),
      );
      return;
    } else {
      setCardNumbersInvalidAttemp(
        cardNumbersInvalidAttemp.map((invalidAttemp: boolean, i: number) => {
          return Number(id) == i ? false : invalidAttemp;
        }),
      );
    }
    const next = [...cardNumbers];
    next[Number(id)] = value;
    setCardNumbers(next);
  };

  const handleBlurCardNumbers = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    const next = [...onBlurCardNumbers];
    next[Number(id)] = true;
    setOnBlurCardNumbers(next);
  };

  return {
    value: cardNumbers,
    onChange: handleChangeCardNumbers,

    blurValue: onBlurCardNumbers,
    onBlur: handleBlurCardNumbers,

    errors: [],

    invalidAttemp: cardNumbersInvalidAttemp,
    renderErrorMessage: renderErrorMessageCardNumbers,
    renderErrorInput: renderErrorCardNumberInput,
  };
};
