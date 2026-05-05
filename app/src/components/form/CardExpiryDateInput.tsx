import { CardInput, CardFieldset, CardLegend } from '../../style/CardStyles';
import { Validator } from '../../validators/CardValidator';
import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { useCardContext } from '../../hooks/useCardContext';

export function CardExpiryDateInput() {
  const { cardExpiryDate, setCardExpiryDate } = useCardContext();
  const [fieldErrors, setError] = useState({
    'expiry-month': false,
    'expiry-year': false,
    message: '',
  });

  const changeCardExpiryMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isNumber(value);
      Validator.isValidMonth(value);
      setError({ ...fieldErrors, [id]: false, message: '' });
      setCardExpiryDate({ ...cardExpiryDate, [id]: value });
    } catch (err) {
      setError({
        ...fieldErrors,
        [id]: true,
        message: err instanceof Error ? err.message : '',
      });
    }
  };

  const changeCardExpiryYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isNumber(value);
      Validator.isValidYear(value);
      setError({ ...fieldErrors, [id]: false, message: '' });
      setCardExpiryDate({ ...cardExpiryDate, [id]: value });
    } catch (err) {
      setError({
        ...fieldErrors,
        [id]: true,
        message: err instanceof Error ? err.message : '',
      });
    }
  };

  const handleBlurCardExpiryDate = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isValidCardExpiryDateLength(value, e.target.maxLength);
      setError({ ...fieldErrors, [id]: false, message: '' });
    } catch (err) {
      setError({
        ...fieldErrors,
        [id]: true,
        message: err instanceof Error ? err.message : '',
      });
    }
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
          fieldErrors={fieldErrors['expiry-month']}
          placeholder="MM"
        />
        <CardInput
          type="text"
          inputMode="numeric"
          id="expiry-year"
          onChange={changeCardExpiryYear}
          onBlur={handleBlurCardExpiryDate}
          maxLength={2}
          value={cardExpiryDate['expiry-year']}
          fieldErrors={fieldErrors['expiry-year']}
          placeholder="YY"
        />
      </CardFieldset>
      <ErrorMessage message={fieldErrors['message']} />
    </>
  );
}

export { CardExpiryDateInput as CardExpiryDateInputContainer };
