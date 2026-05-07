import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';

import { validateExpirationDate, preventExpirationMonth, preventExpirationYear } from '../validator';

export const useExpirationDate = () => {
  const {
    values: expirationDate,
    onChange,
    blur: blurExpirationDate,
    onBlur,
    errors,
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

  return {
    value: expirationDate,
    onChange: handleChangeExpirationDate,

    blurValue: blurExpirationDate,
    onBlur,

    errors,

    invalidAttemp: expirationDateInvalidAttemp,
    renderErrorMessage: renderErrorMessageExpirationDate,
  };
};
