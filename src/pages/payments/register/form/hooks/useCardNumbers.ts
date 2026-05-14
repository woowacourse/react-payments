import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';

import { validateCardNumbers, preventCardNumber } from '../validator';

export const useCardNumbers = () => {
  const { values, onChange, blur, onBlur, refs, ref, errors, valids, isValid, reset } = useFormValues({
    initialValues: { '0': '', '1': '', '2': '', '3': '' },
    validate: validateCardNumbers,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (preventCardNumber(value)) {
      setInvalidAttemp(
        invalidAttemp.map((invalidAttemp: boolean, i: number) => {
          return Number(id) === i ? true : invalidAttemp;
        }),
      );
      return;
    } else {
      setInvalidAttemp(
        invalidAttemp.map((invalidAttemp: boolean, i: number) => {
          return Number(id) == i ? false : invalidAttemp;
        }),
      );
    }

    onChange(e);
  };

  const [invalidAttemp, setInvalidAttemp] = useState([false, false, false, false]);
  // cardNumber --------------------------

  const renderErrorMessage = () => {
    if (invalidAttemp.find(Boolean)) return 'invalidAttemp';
    if (Object.values(blur).every((blur) => !blur)) return '';
    if (Object.values(blur).some((cardNumber) => cardNumber.length !== 4)) return 'incomplete';
    return '';
  };

  const renderErrorCardNumberInput = (index: string) => {
    const cardNumberInvalidAttempMessage = invalidAttemp[Number(index)];
    if (cardNumberInvalidAttempMessage) return true;

    return Object.values(blur).includes(true) && !validateCardNumbers(values);
  };

  const prevFormValidsRefs = useRef<Record<string, boolean>>({});
  const orders = ['0', '1', '2', '3'] as (keyof typeof errors)[];
  useEffect(() => {
    orders.some((order, index) => {
      const current = order;
      const next = orders[index + 1];

      const isValidCurrnet = errors[current]?.every((error) => error.valid);
      const isValidNext = errors[next]?.every((error) => error.valid);

      if (isValidCurrnet && !isValidNext) {
        if (prevFormValidsRefs.current[next]) return true;
        refs.current[next]?.focus();
        prevFormValidsRefs.current[next] = true;
        return true;
      }
    });
  }, [errors, orders]);

  return {
    values,
    onChange: handleChange,

    blur,
    onBlur,

    refs,
    ref,

    errors,
    valids,
    isValid,

    reset,

    invalidAttemp,
    renderErrorMessage,
    renderErrorInput: renderErrorCardNumberInput,
  };
};
