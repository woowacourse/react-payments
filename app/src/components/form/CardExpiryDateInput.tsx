import { useExpiryDateInput } from '../../hooks/useExpiryDateInput';
import { CardInput, CardFieldset, CardLegend } from '../../style/CardStyles';
import { ErrorMessage } from './ErrorMessage';

export function CardExpiryDateInput({
  firstRef,
  onComplete,
}: {
  firstRef: React.RefObject<HTMLInputElement | null>;
  onComplete: () => void;
}) {
  const {
    fieldErrors,
    yearRef,
    cardExpiryDate,
    changeCardExpiryMonth,
    changeCardExpiryYear,
    handleBlurCardExpiryDate,
  } = useExpiryDateInput(onComplete);

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
