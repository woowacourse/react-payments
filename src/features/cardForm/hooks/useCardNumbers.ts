import { useInputFocus } from '@/core/hooks/useInputFocus';
import { isNumericString } from '@/core/utils/validator';
import { BRAND_RULES, type Brand } from '@/entities/card/brand/brand';
import {
  getBrandByCardNumber,
  getCardNumberError,
  getCardError,
  getTotalErrorMessage,
  getFieldErrors,
} from '@/entities/card/cardNumbers';
import { useState } from 'react';

interface UseCardNumbersProps {
  onComplete: () => void;
}

export interface UseCardNumbersResult {
  values: string[];
  brand: Brand;
  isValid: boolean;
  infoErrors: boolean[];
  maxLengths: number[];
  totalErrorMessage: string | undefined;
  handleChange: (inputValue: string, index: number) => void;
  handleBlur: (index: number) => void;
  setInputRef: (node: HTMLInputElement | null, index: number) => void;
}

export const useCardNumbers = ({ onComplete }: UseCardNumbersProps): UseCardNumbersResult => {
  const { setInputRef, focusNext } = useInputFocus();
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [touched, setTouched] = useState<boolean[]>([false, false, false, false]);

  const brand = getBrandByCardNumber(cardNumbers);
  const format = BRAND_RULES[brand].format;
  const errors = cardNumbers.map((cardNumber, idx) => getCardNumberError(cardNumber, format[idx]));

  const totalErrorMessage = getTotalErrorMessage(cardNumbers, touched, errors);
  const infoErrors = getFieldErrors(cardNumbers, touched, errors, brand);
  const isValid = getCardError(cardNumbers.join('')) === undefined;

  const handleChange = (inputValue: string, index: number) => {
    if (inputValue !== '' && !isNumericString(inputValue)) return;

    const next = [...cardNumbers];
    next[index] = inputValue;
    const nextBrand = getBrandByCardNumber(next);

    const isBrandChanged = nextBrand !== brand;
    if (isBrandChanged) next[3] = next[3].slice(0, BRAND_RULES[nextBrand].format[3]);
    setCardNumbers(next);

    if (getCardError(next.join('')) === undefined) onComplete();
    if (inputValue.length === format[index]) focusNext(index + 1);
  };

  const handleBlur = (index: number) => {
    const nextTouched = [...touched];
    nextTouched[index] = true;
    setTouched(nextTouched);
  };

  return {
    values: cardNumbers,
    brand,
    isValid,
    infoErrors,
    maxLengths: format,
    totalErrorMessage,
    handleChange,
    handleBlur,
    setInputRef,
  };
};
