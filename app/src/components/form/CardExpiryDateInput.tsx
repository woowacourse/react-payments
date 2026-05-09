import { CardInput, CardFieldset, CardLegend } from '../../style/CardStyles';
import { Validator } from '../../validators/CardValidator';
import { useState, useRef } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { useCardContext } from '../../hooks/useCardContext';

export function CardExpiryDateInput({
  firstRef,
  onComplete,
}: {
  firstRef: React.RefObject<HTMLInputElement | null>;
  onComplete: () => void;
}) {
  const { cardExpiryDate, setCardExpiryDate } = useCardContext();
  const [fieldErrors, setError] = useState({
    'expiry-month': false,
    'expiry-year': false,
    message: '',
  });
  const yearRef = useRef<HTMLInputElement | null>(null);

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
      yearRef.current?.focus();
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

  return (
    <>
      <CardFieldset>
        <CardLegend>유효기간</CardLegend>
        <CardInput
          type="text"
          inputMode="numeric"
          id="expiry-month"
          onChange={changeCardExpiryMonth}
          onBlur={handleBlurCardExpiryDate}
          maxLength={2}
          value={cardExpiryDate['expiry-month']}
          $fieldErrors={fieldErrors['expiry-month']}
          placeholder="MM"
          ref={firstRef}
        />
        <CardInput
          type="text"
          inputMode="numeric"
          id="expiry-year"
          onChange={changeCardExpiryYear}
          onBlur={handleBlurCardExpiryDate}
          maxLength={2}
          value={cardExpiryDate['expiry-year']}
          $fieldErrors={fieldErrors['expiry-year']}
          placeholder="YY"
          ref={yearRef}
        />
      </CardFieldset>
      <ErrorMessage message={fieldErrors['message']} />
    </>
  );
}

export { CardExpiryDateInput as CardExpiryDateInputContainer };
