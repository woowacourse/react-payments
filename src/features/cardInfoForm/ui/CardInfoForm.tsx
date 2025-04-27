import CardNumberSection from "../../cardNumberSection/ui/CardNumberSection";
import CardExpirationPeriodSection from "../../cardExpirationPeriodSection/ui/CardExpirationPeriodSection";
import CardCVCNumberSection from "../../cardCVCNumberSection/ui/CardCVCNumberSection";
import CardTypeSection from "../../cardTypeSection/ui/CardTypeSection";
import CardPasswordSection from "../../cardPasswordSection/ui/CardPasswordSection";
import CardSubmitButton from "../../cardSubmitButton/ui/CardSubmitButton";
import useStep from "../hooks/useStep";
import { CardInfoFormProps } from "../types/CardInfoForm.types";
import { StyledForm } from "../css/CardInfoForm.css";
import { useAllError } from "../hooks/useAllError";

export default function CardInfoForm({
  cardNumber,
  expirationPeriod,
  CVCNumber,
  password,
  cardType,
}: CardInfoFormProps) {
  const { cardNumberError, monthError, yearError, CVCError, passwordError } =
    useAllError();

  const { step, canSubmit } = useStep({
    cardNumber,
    expirationPeriod,
    CVCNumber,
    password,
    cardType,
    cardNumberError,
    yearError,
    monthError,
    CVCError,
    passwordError,
  });

  return (
    <StyledForm>
      {step >= 4 && (
        <CardPasswordSection
          password={password}
          passwordError={passwordError}
        />
      )}
      {step >= 3 && (
        <CardCVCNumberSection CVCNumber={CVCNumber} CVCError={CVCError} />
      )}
      {step >= 2 && (
        <CardExpirationPeriodSection
          expirationPeriod={expirationPeriod}
          monthError={monthError}
          yearError={yearError}
        />
      )}
      {step >= 1 && <CardTypeSection cardType={cardType} />}
      {step >= 0 && (
        <CardNumberSection
          cardNumber={cardNumber}
          cardNumberError={cardNumberError}
        />
      )}
      {canSubmit && (
        <CardSubmitButton
          cardType={cardType.values.cardType}
          firstCardNumber={cardNumber.values.first}
        />
      )}
    </StyledForm>
  );
}
