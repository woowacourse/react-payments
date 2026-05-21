import { useExpiryDateInput } from '../../hooks/useExpiryDateInput';
import { CardInput, CardFieldset, CardLegend } from '../../style/CardStyles';
import { ErrorMessage } from './ErrorMessage';

export function CardExpiryDateInput({
  expiryMonthRef,
  serverError,
  onCardExpiryDateComplete,
}: {
  expiryMonthRef: React.RefObject<HTMLInputElement | null>;
  serverError: { code: string; message: string } | null;
  onCardExpiryDateComplete: () => void;
}) {
  const {
    fieldErrors,
    expiryYearRef,
    cardExpiryDate,
    changeCardExpiryMonth,
    changeCardExpiryYear,
    handleBlurCardExpiryDate,
  } = useExpiryDateInput(onCardExpiryDateComplete);

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
          ref={expiryMonthRef}
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
          ref={expiryYearRef}
        />
      </CardFieldset>
      <ErrorMessage
        message={
          fieldErrors['message'] ||
          (serverError?.code === 'INVALID_EXPIRY_DATE' ? serverError.message : '')
        }
      />
    </>
  );
}

export { CardExpiryDateInput as CardExpiryDateInputContainer };
