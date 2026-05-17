import { isNumericString } from '@/core/utils/validator';
import {
  isValidFormatMonth,
  MONTH_CONSTAND,
  validateMonth,
  validateYear,
  YEAR_CONSTAND,
} from '@/entities/card/model/expiryDate';
import { useState } from 'react';

interface FieldState {
  value: string;
  errorMessage: string | undefined;
  isValid: boolean;
  maxLength: number;
  handleChange: (value: string) => void;
  handleBlur: () => void;
}

export interface UseExpiryDateResult {
  month: FieldState;
  year: FieldState;
  isValid: boolean;
}

export const useExpiryDate = (): UseExpiryDateResult => {
  const [monthValue, setMonthValue] = useState('');
  const [monthTouched, setMonthTouched] = useState(false);
  const [yearValue, setYearValue] = useState('');
  const [yearTouched, setYearTouched] = useState(false);

  const monthError = validateMonth(monthValue);
  const yearError = validateYear(yearValue);
  const isValid = !monthError && !yearError;

  const handleMonthChange = (value: string) => {
    if (value !== '' && !isNumericString(value)) return;
    if (!isValidFormatMonth(value)) return;
    setMonthValue(value);
    setMonthTouched(false);
  };

  const handleYearChange = (value: string) => {
    if (value !== '' && !isNumericString(value)) return;
    setYearValue(value);
    setYearTouched(false);
  };

  return {
    month: {
      value: monthValue,
      errorMessage: monthTouched ? monthError : undefined,
      isValid: !monthError,
      handleChange: handleMonthChange,
      handleBlur: () => setMonthTouched(true),
      maxLength: MONTH_CONSTAND.LENGTH,
    },
    year: {
      value: yearValue,
      errorMessage: yearTouched ? yearError : undefined,
      isValid: !yearError,
      handleChange: handleYearChange,
      handleBlur: () => setYearTouched(true),
      maxLength: YEAR_CONSTAND.LENGTH,
    },
    isValid,
  };
};
