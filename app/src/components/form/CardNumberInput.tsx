import { useState, useRef } from 'react';
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

export function CardNumberInput({
  firstRef,
  onComplete,
}: {
  firstRef: React.RefObject<HTMLInputElement | null>;
  onComplete: () => void;
}) {
  const { cardNumber, setCardNumber } = useCardContext();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const networkBrand = BrandValidator.detectNetworkBrand(cardNumber.join('')).brand;

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
    const brandResult = BrandValidator.detectNetworkBrand(newCardNumber.join(''));
    if (!brandResult.valid) {
      setError({ ...fieldErrors, [fieldId]: true, message: brandResult.message });
      return;
    }

    setError({ ...fieldErrors, [fieldId]: false, message: '' });
    setCardNumber(newCardNumber);

    const max = handleInputMaxLength(networkBrand, indexMap[id]).maxLength;
    if (value.length === max) {
      inputRefs.current[index + 1]?.focus();
    }

    const lastDigitLength = networkBrand === 'diners' ? 2 : networkBrand === 'amex' ? 3 : 4;
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

  return (
    <>
      <CardFieldset>
        <CardLegend>카드 번호</CardLegend>
        {fields.map((field, index) => (
          <CardInput
            key={field}
            id={field}
            type="text"
            maxLength={handleInputMaxLength(networkBrand, index).maxLength}
            inputMode="numeric"
            value={cardNumber[index]}
            onChange={(e) => changeCardNumber(e, index)}
            onBlur={handleBlurCardNumber}
            placeholder={handleInputMaxLength(networkBrand, index).placeholder}
            $fieldErrors={fieldErrors[field]}
            ref={(el) => {
              inputRefs.current[index] = el;
              if (index === 0) firstRef.current = el;
            }}
          />
        ))}
      </CardFieldset>
      <ErrorMessage message={fieldErrors['message']} />
    </>
  );
}

export { CardNumberInput as CardNumberInputContainer };
