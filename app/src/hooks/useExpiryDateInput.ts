import { useRef, useState } from 'react';
import { useCardContext } from './useCardContext';
import { Validator } from '../validators/CardValidator';

export function useExpiryDateInput(onComplete: () => void) {
  const { cardExpiryDate, setCardExpiryDate } = useCardContext();
  const [fieldErrors, setError] = useState({
    'expiry-month': false,
    'expiry-year': false,
    message: '',
  });
  const expiryYearRef = useRef<HTMLInputElement | null>(null);

  const changeCardExpiryMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;

    const numberResult = Validator.isNumber(value);
    if (!numberResult.valid) {
      setError({ ...fieldErrors, [id]: true, message: numberResult.message });
      return;
    }
    const monthResult = Validator.isValidMonth(value);
    if (!monthResult.valid) {
      setError({ ...fieldErrors, [id]: true, message: monthResult.message });
      return;
    }
    setError({ ...fieldErrors, [id]: false, message: '' });
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });

    if (value.length === 2) {
      expiryYearRef.current?.focus();
    }
  };

  const changeCardExpiryYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;

    const numberResult = Validator.isNumber(value);
    if (!numberResult.valid) {
      setError({ ...fieldErrors, [id]: true, message: numberResult.message });
      return;
    }
    const yearResult = Validator.isValidYear(value);
    if (!yearResult.valid) {
      setError({ ...fieldErrors, [id]: true, message: yearResult.message });
      return;
    }
    setError({ ...fieldErrors, [id]: false, message: '' });
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });

    if (cardExpiryDate['expiry-month'].length === 2 && value.length === 2) {
      onComplete();
    }
  };

  const handleBlurCardExpiryDate = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;

    const lengthResult = Validator.isValidCardExpiryDateLength(value, e.target.maxLength);
    if (!lengthResult.valid) {
      setError({ ...fieldErrors, [id]: true, message: lengthResult.message });
      return;
    }
    if (cardExpiryDate['expiry-month'].length === 2 && cardExpiryDate['expiry-year'].length === 2) {
      const expiryResult = Validator.isValidCardExpiryDate(
        cardExpiryDate['expiry-month'],
        cardExpiryDate['expiry-year'],
      );
      if (!expiryResult.valid) {
        setError({
          ...fieldErrors,
          'expiry-month': true,
          'expiry-year': true,
          message: expiryResult.message,
        });
        return;
      }
    }
    setError({ ...fieldErrors, [id]: false, message: '' });
  };

  return {
    fieldErrors,
    expiryYearRef,
    cardExpiryDate,
    changeCardExpiryMonth,
    changeCardExpiryYear,
    handleBlurCardExpiryDate,
  };
}
