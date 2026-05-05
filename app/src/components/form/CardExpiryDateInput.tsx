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
  };

  const handleBlurCardExpiryDate = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;

    const result = Validator.isValidCardExpiryDateLength(value, e.target.maxLength);
    if (!result.valid) {
      setError({ ...fieldErrors, [id]: true, message: result.message });
      return;
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
        />
      </CardFieldset>
      <ErrorMessage message={fieldErrors['message']} />
    </>
  );
}

export { CardExpiryDateInput as CardExpiryDateInputContainer };
