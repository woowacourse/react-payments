import { useInputFocus } from '@/core/hooks/useInputFocus';
import { isNumericString } from '@/core/utils/validator';
import {
  isValidFormatMonth,
  MONTH_CONSTAND,
  validateMonth,
  validateYear,
  YEAR_CONSTAND,
} from '@/entities/card/expiryDate';
import { useInput } from '@/core/hooks/useInput';

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
  setInputRef: (node: HTMLInputElement | null, index: number) => void;
}

const monthValidate = (month: string) => {
  return isNumericString(month) && isValidFormatMonth(month);
};
export const useExpiryDate = ({ onComplete }: { onComplete: () => void }): UseExpiryDateResult => {
  const month = useInput({ validator: monthValidate });
  const year = useInput({ validator: isNumericString });
  const { setInputRef, focusNext } = useInputFocus();

  const monthError = validateMonth(month.value);
  const yearError = validateYear(year.value);

  const isValid = !monthError && !yearError;

  const handleMonthChange = (value: string) => {
    month.handleChange(value);
    if (!validateMonth(value)) focusNext(1);
  };

  const handleYearChange = (value: string) => {
    year.handleChange(value);
    if (!validateYear(value)) onComplete();
  };

  return {
    month: {
      value: month.value,
      errorMessage: month.touched ? monthError : undefined,
      isValid: !monthError,
      handleChange: handleMonthChange,
      handleBlur: month.handleBlur,
      maxLength: MONTH_CONSTAND.LENGTH,
    },
    year: {
      value: year.value,
      errorMessage: year.touched ? yearError : undefined,
      isValid: !yearError,
      handleChange: handleYearChange,
      handleBlur: year.handleBlur,
      maxLength: YEAR_CONSTAND.LENGTH,
    },
    isValid,
    setInputRef,
  };
};
