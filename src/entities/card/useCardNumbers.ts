import { CARD_BRAND_FORMAT, getBrand } from './brand';
import { useState } from 'react';
import type { Brand } from './brand';

interface UseCardNumbersProps {
  validateCardNumber: ({
    cardNumber,
    index,
    brand,
  }: {
    cardNumber: string;
    index: number;
    brand: Brand;
  }) => string | undefined;
  validateCardNumberFormat: (cardNumber: string) => string | undefined;
}

export interface UseCardNumbersResult {
  cardNumbers: string[];
  errors: (string | undefined)[];
  errorMessage: string | undefined;
  maxLengths: number[];
  handleChange: (value: string, index: number) => void;
  handleBlur: (index: number) => void;
}

export const useCardNumbers = ({
  validateCardNumber,
  validateCardNumberFormat,
}: UseCardNumbersProps): UseCardNumbersResult => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(CARD_BRAND_FORMAT.default.map(() => ''));
  const [errors, setErrors] = useState<(string | undefined)[]>(
    CARD_BRAND_FORMAT.default.map(() => undefined),
  );

  const brand = getBrand(cardNumbers.join(''));

  const handleChange = (value: string, index: number): void => {
    const nextErrors = [...errors];
    nextErrors[index] = validateCardNumberFormat(value);
    setErrors(nextErrors);
    if (nextErrors[index] !== undefined) return;

    const nextCardNumbers = [...cardNumbers];
    nextCardNumbers[index] = value;
    setCardNumbers(nextCardNumbers);
  };

  const handleBlur = (index: number) => {
    const nextError = [...errors];
    nextError[index] = validateCardNumber({ cardNumber: cardNumbers[index], index, brand });
    setErrors(nextError);
  };

  const errorMessage = errors.find((error) => error !== undefined);
  const maxLengths = CARD_BRAND_FORMAT[brand];

  return { cardNumbers, errors, errorMessage, maxLengths, handleChange, handleBlur };
};
