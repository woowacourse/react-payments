import { isNumericString } from '@/core/utils/validator';
import { updateNumbers } from '@/entities/card/lib/handleNumbers';
import { BRAND, BRAND_RULES, type Brand } from '@/entities/card/model/brand';
import {
  getBrandByNumber,
  getNumberError,
  getTotalErrorMessage,
} from '@/entities/card/model/numbers';
import { useState } from 'react';

export interface UseNumbersResults {
  values: string[];
  brand: Brand;
  maxLengths: number[];
  infoErrorField: boolean[];
  totalErrorMessage: string | undefined;
  handleChange: (input: string, index: number) => void;
  handleBlur: (index: number) => void;
}

export const useNumbers = (): UseNumbersResults => {
  const [numbers, setNumbers] = useState<string[]>(['', '', '', '']);
  const [touched, setTouched] = useState<boolean[]>([false, false, false, false]);

  const brand = getBrandByNumber(numbers);
  const format = BRAND_RULES[brand].format;

  const errors = numbers.map((cardNumber, idx) => getNumberError(cardNumber, format[idx]));
  const errorFiled = errors.map((error, idx) => error !== undefined && touched[idx]);

  const isTouched = touched.some((e) => e === true);
  const totalErrorMessage = getTotalErrorMessage(isTouched, errorFiled, brand);
  const isFilled = numbers.every((num, idx) => num.length === format[idx]);
  const infoErrorField =
    isFilled && brand === BRAND.UNKNOWN ? [true, true, true, true] : errorFiled;

  const handleChange = (inputValue: string, index: number) => {
    if (inputValue !== '' && !isNumericString(inputValue)) return;

    const next = updateNumbers(numbers, inputValue, index, brand);
    setNumbers(next);
  };

  const handleBlur = (index: number) => {
    const next = [...touched];
    next[index] = true;
    setTouched(next);
  };

  return {
    values: numbers,
    brand,
    maxLengths: format,
    infoErrorField,
    totalErrorMessage,
    handleChange,
    handleBlur,
  };
};
