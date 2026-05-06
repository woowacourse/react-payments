import { useState } from 'react';
import type { ChangeEvent } from 'react';

import { useFormValues } from '@/core/hooks/useFormValues';
import { isNumericString } from '@/core/utils/validator';

import type { ExpirationDate } from '../types';

import { validateExpirationDate } from '../validator';

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

  const preventExpirationMonth = (month: string) => {
    if (month !== '' && !isNumericString(month)) return true;
    if (month.length > 2) return true;

    return false;
  };

  const preventExpirationYear = (year: string) => {
    if (year !== '' && !isNumericString(year)) return true;
    if (year.length > 2) return true;

    return false;
  };

  const renderErrorMessageExpirationDate = (expirationDate: ExpirationDate) => {
    if (Object.values(expirationDateInvalidAttemp).find(Boolean)) return '유효햔 유효기간(숫자)을 입력해주세요';
    if (Object.values(blurExpirationDate).every((blur) => !blur)) return '';

    const isValidateExpirationDate = validateExpirationDate(expirationDate);
    if (!Object.values(isValidateExpirationDate).every((valid) => valid)) return '유효기간을 전부 채워주세요';
    return '';
  };

  // expirationDate 관련 상태값 -- end

  return {
    value: expirationDate,
    onChange: handleChangeExpirationDate,

    blurValue: blurExpirationDate,
    onBlur,

    errors: {
      month: [],
      year: [],
    },

    invalidAttemp: expirationDateInvalidAttemp,
    renderErrorMessage: renderErrorMessageExpirationDate,
  };
};
