import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { Validator } from '../../validators/CardValidator';
import { BrandValidator } from '../../validators/BrandValidator';
import { CardFieldset, CardLegend, CardInput } from '../../style/CardStyles';
import { useCardContext } from '../../hooks/useCardContext';
import type { cardNumberFieldError } from '../../types/fieldError';

const indexMap: { [key: string]: number } = {
  'first-digits': 0,
  'second-digits': 1,
  'third-digits': 2,
  'fourth-digits': 3,
};

const fields: Exclude<keyof cardNumberFieldError, 'message'>[] = [
  'first-digits',
  'second-digits',
  'third-digits',
  'fourth-digits',
];

export function CardNumberInput() {
  const { cardNumber, setCardNumber, setNetworkBrand } = useCardContext();

  const [fieldErrors, setError] = useState<cardNumberFieldError>({
    'first-digits': false,
    'second-digits': false,
    'third-digits': false,
    'fourth-digits': false,
    message: '',
  });

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    const fieldId = id as keyof cardNumberFieldError;

    const numberResult = Validator.isNumber(value);
    if (!numberResult.valid) {
      setError({ ...fieldErrors, [fieldId]: true, message: numberResult.message });
      return;
    }

    const newCardNumber = [...cardNumber];
    newCardNumber[indexMap[id]] = value;
    const brandResult = BrandValidator.detectNetworkBrand(newCardNumber.join(''));
    if (!brandResult.valid) {
      setError({ ...fieldErrors, [fieldId]: true, message: brandResult.message });
      return;
    }
    setNetworkBrand(brandResult.brand);

    setError({ ...fieldErrors, [fieldId]: false, message: '' });
    setCardNumber(newCardNumber);
  };

  const handleBlurCardNumber = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    const fieldId = id as keyof cardNumberFieldError;

    const result = Validator.isValidCardNumberLength(value, e.target.maxLength);
    if (!result.valid) {
      setError({ ...fieldErrors, [fieldId]: true, message: result.message });
      return;
    }
    setError({ ...fieldErrors, [fieldId]: false, message: '' });
  };

  return (
    <>
      <CardFieldset>
        <CardLegend>카드 번호</CardLegend>
        {fields.map((field, index) => (
          <CardInput
            key={field}
            id={field}
            type="text"
            maxLength={4}
            inputMode="numeric"
            value={cardNumber[index]}
            onChange={changeCardNumber}
            onBlur={handleBlurCardNumber}
            placeholder="1234"
            $fieldErrors={fieldErrors[field]}
          />
        ))}
      </CardFieldset>
      <ErrorMessage message={fieldErrors['message']} />
    </>
  );
}

export { CardNumberInput as CardNumberInputContainer };
