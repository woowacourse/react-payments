import { useInputFocus } from '@/core/hooks/useInputFocus';
import { isNumericString } from '@/core/utils/validator';
import { BRAND, getBrand, RULES, type Brand } from '@/entities/card/brand/brand';
import {
  CARD_NUMBER_ERRORS,
  validateCardNumber,
  validateFullCardNumber,
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

  const brandCardStand =
    cardNumbers[0].length !== 4 ? cardNumbers[0] : cardNumbers[0] + cardNumbers[1];
  const brand = getBrand(brandCardStand);
  const format = RULES[brand].format;

  const errors = cardNumbers.map((cardNumber, idx) => validateCardNumber(cardNumber, format[idx]));

  const isTotalTouched = touched.every(Boolean);
  const isFirstTwoTouched = touched[0] && touched[1];
  const isUnknownBrand = brand === BRAND.UNKNOWN;
  const hasEmptyTouched = touched.some((touch, idx) => touch && cardNumbers[idx] === '');

  const totalErrorMessage = (): string | undefined => {
    if (hasEmptyTouched) return CARD_NUMBER_ERRORS.LENGTH;
    if (isFirstTwoTouched && isUnknownBrand) return CARD_NUMBER_ERRORS.UNKNOWN;
    if (isTotalTouched) {
      const fieldError = errors.find((error) => error !== undefined);
      if (fieldError) return fieldError;
      return validateFullCardNumber(cardNumbers.join(''));
    }
    return undefined;
  };

  // UNKNOWN 브랜드거나 빈값 에러일 때 전체 필드 빨간색
  const isAllError = hasEmptyTouched || (isFirstTwoTouched && isUnknownBrand);
  const infoErrors = isAllError
    ? touched.map((touch) => touch) // 터치된 필드만 빨간색
    : errors.map((error, idx) => touched[idx] && error !== undefined);

  const isValid =
    validateFullCardNumber(cardNumbers.join('')) === undefined && brand !== BRAND.UNKNOWN;

  const handleChange = (inputValue: string, index: number) => {
    if (inputValue !== '' && !isNumericString(inputValue)) return;

    const next = [...cardNumbers];
    next[index] = inputValue;
    const nextBrand = getBrand(next[0]);

    if (index !== 3) next[3] = next[3].slice(0, RULES[nextBrand].format[3]);
    setCardNumbers(next);

    if (validateFullCardNumber(next.join('')) === undefined) onComplete();
    if (inputValue.length === 4) focusNext(index + 1);
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
    totalErrorMessage: totalErrorMessage(),
    handleChange,
    handleBlur,
    setInputRef,
  };
};
