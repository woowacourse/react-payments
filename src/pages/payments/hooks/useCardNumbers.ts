import { useState, type ChangeEvent } from 'react';

import { isNumericString } from '@/core/utils/validator';

import { useFormValues } from '@/core/hooks/useFormValues';

import { validateCardNumbers } from '../validator';

export const useCardNumbers = () => {
  const {
    values: cardNumbers,
    onChange,
    blur: blurCardNumbers,
    onBlur,
    errors,
  } = useFormValues({
    initialValues: { '0': '', '1': '', '2': '', '3': '' },
    validate: validateCardNumbers,
  });

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

    onChange(e);
  };

  const [cardNumbersInvalidAttemp, setCardNumbersInvalidAttemp] = useState([false, false, false, false]);
  // cardNumber --------------------------

  const preventCardNumber = (cardNumber: string) => {
    if (cardNumber !== '' && !isNumericString(cardNumber)) return true;
    if (cardNumber.length > 4) return true;
    return false;
  };

  const renderErrorMessageCardNumbers = () => {
    if (cardNumbersInvalidAttemp.find(Boolean)) return '유효현 카드번호(숫자)를 입력해주세요';
    if (Object.values(blurCardNumbers).every((blur) => !blur)) return '';
    if (Object.values(cardNumbers).some((cardNumber) => cardNumber.length !== 4)) return '카드 번호를 전부 채워주세요';
    return '';
  };

  const renderErrorCardNumberInput = (index: string) => {
    const cardNumberInvalidAttempMessage = cardNumbersInvalidAttemp[Number(index)];
    if (cardNumberInvalidAttempMessage) return true;

    return Object.values(blurCardNumbers).includes(true) && !validateCardNumbers(cardNumbers);
  };

  return {
    value: cardNumbers,
    onChange: handleChangeCardNumbers,

    blurValue: blurCardNumbers,
    onBlur,

    errors,

    invalidAttemp: cardNumbersInvalidAttemp,
    renderErrorMessage: renderErrorMessageCardNumbers,
    renderErrorInput: renderErrorCardNumberInput,
  };
};
