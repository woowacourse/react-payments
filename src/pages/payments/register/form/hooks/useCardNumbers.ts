import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';

import { validateCardNumbers, preventCardNumber } from '../validator';

export const useCardNumbers = () => {
  const {
    values: cardNumbers,
    onChange,
    blur: blurCardNumbers,
    onBlur,
    refs,
    ref,
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

  const orders = ['0', '1', '2', '3'] as (keyof typeof errors)[];
  useEffect(() => {
    orders.some((order, index) => {
      const current = order;
      const next = orders[index + 1];

      const isValidCurrnet = errors[current]?.every((error) => error.valid);
      const isValidNext = errors[next]?.every((error) => error.valid);

      if (isValidCurrnet && !isValidNext) {
        refs.current[next]?.focus();
        return true;
      }
    });
  }, [errors, orders]);

  return {
    value: cardNumbers,
    onChange: handleChangeCardNumbers,

    blurValue: blurCardNumbers,
    onBlur,

    refs,
    ref,

    errors,

    invalidAttemp: cardNumbersInvalidAttemp,
    renderErrorMessage: renderErrorMessageCardNumbers,
    renderErrorInput: renderErrorCardNumberInput,
  };
};
