import { CardNumberPosition } from "../../types/index.types";
import CardNumberSection from "../cardNumberSection/CardNumberSection";
import CardExpirationPeriodSection from "../cardExpirationPeriodSection/CardExpirationPeriodSection";
import CardCVCNumberSection from "../cardCVCNumberSection/CardCVCNumberSection";
import useError from "./hooks/useError";
import { NO_ERROR } from "../../shared/constants/constant";
import { getCardNumberValidationFns } from "../../entities/cardNumberInputs/CardNumberInputs.domain";
import {
  getMonthValidationFns,
  getYearValidationFns,
} from "../../entities/cardExpirationPeriodInputs/CardExpirationPeriodInputs.domain";
import { getCVCValidationFns } from "../../entities/cardCVCNumberInputs/CardCVCNumberInputs.domain";
import CardTypeSection from "../cardTypeSection/CardTypeSection";
import CardPasswordSection from "../cardPasswordSection/CardPasswordSection";
import CardSubmitButton from "../cardSubmitButton/CardSubmitButton";
import useStep from "./hooks/useStep";
import { getPasswordValidationFns } from "../../entities/cardPasswordInputs/CardPasswordInputs.domain";
import { CardInfoFormProps } from "./types/CardInfoForm.types";
import { StyledForm } from "./CardInfoForm.css";

export default function CardInfoForm({
  cardNumber,
  expirationPeriod,
  CVCNumber,
  password,
  cardType,
}: CardInfoFormProps) {
  const cardNumberError = useError<Record<CardNumberPosition, string>>(
    {
      first: NO_ERROR,
      second: NO_ERROR,
      third: NO_ERROR,
      fourth: NO_ERROR,
    },
    getCardNumberValidationFns
  );

  const monthError = useError<Record<"month", string>>(
    {
      month: NO_ERROR,
    },
    getMonthValidationFns
  );

  const yearError = useError<Record<"year", string>>(
    {
      year: NO_ERROR,
    },
    getYearValidationFns
  );

  const CVCError = useError<Record<"CVCNumber", string>>(
    {
      CVCNumber: NO_ERROR,
    },
    getCVCValidationFns
  );

  const passwordError = useError<Record<"password", string>>(
    {
      password: NO_ERROR,
    },
    getPasswordValidationFns
  );

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
