import { ErrorMessage } from './ErrorMessage';
import { CardFieldset, CardLegend, CardInput } from '../../style/CardStyles';
import type { cardNumberFieldError } from '../../types/fieldError';
import { useCardNumberInput } from '../../hooks/useCardNumberInput';

const fields: Exclude<keyof cardNumberFieldError, 'message'>[] = [
  'first-digits',
  'second-digits',
  'third-digits',
  'fourth-digits',
];

export function CardNumberInput({
  firstRef,
  serverError,
  onCardNumberComplete,
}: {
  firstRef: React.RefObject<HTMLInputElement | null>;
  serverError: { code: string; message: string } | null;
  onCardNumberComplete: () => void;
}) {
  const {
    fieldErrors,
    networkBrand,
    cardNumber,
    inputRefs,
    changeCardNumber,
    handleBlurCardNumber,
    handleInputMaxLength,
  } = useCardNumberInput(onCardNumberComplete);

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
      <ErrorMessage
        message={fieldErrors['message'] || (serverError?.code === 'INVALID_CARD_NUMBER' ? serverError.message : '')}
      />
    </>
  );
}

export { CardNumberInput as CardNumberInputContainer };
