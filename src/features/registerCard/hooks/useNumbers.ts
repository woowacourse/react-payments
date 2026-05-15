import { isNumericString } from '@/core/utils/validator';
import { updateNumbers } from '@/entities/card/lib/handleNumbers';
import { BRAND_RULES } from '@/entities/card/model/brand';
import {
  getBrandByNumber,
  getNumberError,
  getTotalErrorMessage,
} from '@/entities/card/model/numbers';
import { useState } from 'react';

export const useNumbers = () => {
  const [numbers, setNumbers] = useState<string[]>(['', '', '', '']);
  const [touched, setTouched] = useState<boolean[]>([false, false, false, false]);

  const brand = getBrandByNumber(numbers);
  const format = BRAND_RULES[brand].format;

  const errors = numbers.map((cardNumber, idx) => getNumberError(cardNumber, format[idx]));
  const errorFiled = errors.map((error, idx) => error !== undefined && touched[idx]);

  const totalErrorMessage = getTotalErrorMessage(numbers, errorFiled, brand);
  const infoErrorField = totalErrorMessage === undefined ? errorFiled : [true, true, true, true];

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
    fieldErrors: infoErrorField,
    totalErrorMessage,
    handleChange,
    handleBlur,
  };
};
