import { useState } from 'react';
import { useInputFocus } from '@/core/hooks/useInputFocus';
import { isInputNumbericString } from '@/core/utils/validator';
import {
  isValidFormatMonth,
  MONTH_CONSTAND,
  validateMonth,
  validateYear,
  YEAR_CONSTAND,
} from '@/entities/card/expiryDate';

interface FieldState {
  value: string;
  errorMessage: string | undefined;
  handleBlur: () => void;
  handleChange: (value: string) => void;
  maxLength: number;
}

export interface UseExpiryDateResult {
  month: FieldState;
  year: FieldState;
  setInputRef: (node: HTMLInputElement | null, index: number) => void;
}

export const useExpiryDate = ({ onComplete }: { onComplete: () => void }): UseExpiryDateResult => {
  const [monthValue, setMonthValue] = useState('');
  const [monthTouched, setMonthTouched] = useState(false);
  const [yearValue, setYearValue] = useState('');
  const [yearTouched, setYearTouched] = useState(false);
  const { setInputRef, focusNext } = useInputFocus();

  const handleMonthChange = (value: string) => {
    if (!isValidFormatMonth(value)) return;
    setMonthValue(value);
    setMonthTouched(false);
    if (!validateMonth(value)) focusNext(1);
  };

  const handleYearChange = (value: string) => {
    if (!isInputNumbericString(value)) return;
    setYearValue(value);
    setYearTouched(false);
    if (!validateYear(value) && !validateMonth(monthValue)) onComplete();
  };

  return {
    month: {
      value: monthValue,
      errorMessage: monthTouched ? validateMonth(monthValue) : undefined,
      handleBlur: () => setMonthTouched(true),
      handleChange: handleMonthChange,
      maxLength: MONTH_CONSTAND.LENGTH,
    },
    year: {
      value: yearValue,
      errorMessage: yearTouched ? validateYear(yearValue) : undefined,
      handleBlur: () => setYearTouched(true),
      handleChange: handleYearChange,
      maxLength: YEAR_CONSTAND.LENGTH,
    },
    setInputRef,
  };
};
