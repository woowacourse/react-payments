import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { Validator } from '../../validators/CardValidator';
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
    try {
      Validator.isNumber(value);
      if (id === 'first-digits') {
        Validator.isValidNetworkBrand(value);
        setNetworkBrand(Validator.detectNetworkBrand(value));
      }
      setError({ ...fieldErrors, [id]: false, message: '' });
      const newCardNumber = [...cardNumber];
      newCardNumber[indexMap[id]] = value;
      setCardNumber(newCardNumber);
    } catch (err) {
      setError({
        ...fieldErrors,
        [id]: true,
        message: err instanceof Error ? err.message : '',
      });
    }
  };

  const handleBlurCardNumber = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    try {
      Validator.isValidCardNumberLength(value, e.target.maxLength);
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
