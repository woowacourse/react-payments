import { useRef, useState } from 'react';
import type { cardNumberFieldError } from '../types/fieldError';
import { useCardContext } from './useCardContext';
import { BrandValidator } from '../validators/BrandValidator';
import { Validator } from '../validators/CardValidator';
import { useCardForm } from './useCardForm';

const indexMap: { [key: string]: number } = {
  'first-digits': 0,
  'second-digits': 1,
  'third-digits': 2,
  'fourth-digits': 3,
};

export function useCardNumberInput(onComplete: () => void) {
  const { cardNumber, setCardNumber } = useCardContext();
  const { networkBrand } = useCardForm();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [fieldErrors, setError] = useState<cardNumberFieldError>({
    'first-digits': false,
    'second-digits': false,
    'third-digits': false,
    'fourth-digits': false,
    message: '',
  });

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value, id } = e.target;
    const fieldId = id as keyof cardNumberFieldError;

    const numberResult = Validator.isNumber(value);
    if (!numberResult.valid) {
      setError({ ...fieldErrors, [fieldId]: true, message: numberResult.message });
      return;
    }

    const newCardNumber = [...cardNumber];
    newCardNumber[indexMap[id]] = value;

    let currentBrand = networkBrand;
    if (newCardNumber[0].length > 0) {
      const brandResult = BrandValidator.detectNetworkBrand(newCardNumber.join(''));
      if (!brandResult.valid) {
        setError({ ...fieldErrors, [fieldId]: true, message: brandResult.message });
        return;
      }
      currentBrand = brandResult.brand;
    }

    setError({ ...fieldErrors, [fieldId]: false, message: '' });
    setCardNumber(newCardNumber);

    const max = handleInputMaxLength(currentBrand, indexMap[id]).maxLength;
    if (value.length === max) {
      inputRefs.current[index + 1]?.focus();
    }

    const lastDigitLength = currentBrand === 'diners' ? 2 : currentBrand === 'amex' ? 3 : 4;
    if (
      cardNumber[0].length === 4 &&
      cardNumber[1].length === 4 &&
      cardNumber[2].length === 4 &&
      value.length === lastDigitLength
    ) {
      onComplete();
    }
  };

  const handleBlurCardNumber = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id, maxLength } = e.target;
    const fieldId = id as keyof cardNumberFieldError;
    const inputIndex = indexMap[id];

    const result = Validator.isValidCardNumberLength(value, inputIndex, maxLength);
    if (!result.valid) {
      setError({ ...fieldErrors, [fieldId]: true, message: result.message });
      return;
    }
    setError({ ...fieldErrors, [fieldId]: false, message: '' });
  };

  const handleInputMaxLength = (
    networkBrand: string,
    index: number,
  ): { maxLength: number; placeholder: string } => {
    if (networkBrand === 'diners' && index === 3) {
      return { maxLength: 2, placeholder: '12' };
    }

    if (networkBrand === 'amex' && index === 3) {
      return { maxLength: 3, placeholder: '123' };
    }

    return { maxLength: 4, placeholder: '1234' };
  };

  return {
    fieldErrors,
    networkBrand,
    cardNumber,
    inputRefs,
    changeCardNumber,
    handleBlurCardNumber,
    handleInputMaxLength,
  };
}
