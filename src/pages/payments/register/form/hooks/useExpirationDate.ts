import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';

import { validateExpirationDate, preventExpirationMonth, preventExpirationYear } from '../validator';

export const useExpirationDate = () => {
  const { values, onChange, blur, onBlur, refs, ref, errors, valids, isValid, reset } = useFormValues({
    initialValues: { month: '', year: '' },
    validate: validateExpirationDate,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === 'month') {
      if (preventExpirationMonth(value)) {
        setInvalidAttemp({ ...invalidAttemp, month: true });
        return;
      } else {
        setInvalidAttemp({ ...invalidAttemp, month: false });
      }
    }
    if (id === 'year') {
      if (preventExpirationYear(value)) {
        setInvalidAttemp({ ...invalidAttemp, year: true });
        return;
      } else {
        setInvalidAttemp({ ...invalidAttemp, year: false });
      }
    }

    onChange(e);
  };

  const [invalidAttemp, setInvalidAttemp] = useState({
    month: false,
    year: false,
  });

  const renderErrorMessage = () => {
    if (Object.values(invalidAttemp).find(Boolean)) return '유효햔 유효기간(숫자)을 입력해주세요';
    if (Object.values(blur).every((blur) => !blur)) return '';

    const errorMonth = errors.month.filter((error) => !error.valid);
    if (errorMonth[0]) return errorMonth[0].message;

    const errorYear = errors.year.filter((error) => !error.valid);
    if (errorYear[0]) return errorYear[0].message;
    return '';
  };

  // expirationDate 관련 상태값 -- end
  const prevFormValidsRefs = useRef<Record<string, boolean>>({});
  const orders = ['month', 'year'] as (keyof typeof errors)[];
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

    errors,
    valids,
    isValid,

    reset,

    refs,
    ref,

    invalidAttemp,
    renderErrorMessage,
  };
};
