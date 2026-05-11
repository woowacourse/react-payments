import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';

import { validateExpirationDate, preventExpirationMonth, preventExpirationYear } from '../validator';

export const useExpirationDate = () => {
  const {
    values: expirationDate,
    onChange,
    blur: blurExpirationDate,
    onBlur,
    refs,
    ref,
    errors,
    valids,
    isValid,
  } = useFormValues({
    initialValues: { month: '', year: '' },
    validate: validateExpirationDate,
  });

  const handleChangeExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === 'month') {
      if (preventExpirationMonth(value)) {
        setExpirationDateInvalidAttemp({ ...expirationDateInvalidAttemp, month: true });
        return;
      } else {
        setExpirationDateInvalidAttemp({ ...expirationDateInvalidAttemp, month: false });
      }
    }
    if (id === 'year') {
      if (preventExpirationYear(value)) {
        setExpirationDateInvalidAttemp({ ...expirationDateInvalidAttemp, year: true });
        return;
      } else {
        setExpirationDateInvalidAttemp({ ...expirationDateInvalidAttemp, year: false });
      }
    }

    onChange(e);
  };

  const [expirationDateInvalidAttemp, setExpirationDateInvalidAttemp] = useState({
    month: false,
    year: false,
  });

  const renderErrorMessageExpirationDate = () => {
    if (Object.values(expirationDateInvalidAttemp).find(Boolean)) return '유효햔 유효기간(숫자)을 입력해주세요';
    if (Object.values(blurExpirationDate).every((blur) => !blur)) return '';

    const errorMonth = errors.month.filter((error) => !error.valid);
    if (errorMonth[0]) return errorMonth[0].message;

    const errorYear = errors.year.filter((error) => !error.valid);
    if (errorYear[0]) return errorYear[0].message;
    return '';
  };

  // expirationDate 관련 상태값 -- end

  const orders = ['month', 'year'] as (keyof typeof errors)[];
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
    value: expirationDate,
    onChange: handleChangeExpirationDate,

    blurValue: blurExpirationDate,
    onBlur,

    errors,
    valids,
    isValid,

    refs,
    ref,

    invalidAttemp: expirationDateInvalidAttemp,
    renderErrorMessage: renderErrorMessageExpirationDate,
  };
};
