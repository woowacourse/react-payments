import { useMemo, useRef } from "react";
import {
  CardNumberPosition,
  ExpirationPeriod,
  State,
  Error,
} from "../../../shared/types/index.types";

export default function useStep({ cardInfo, errorInfo }: CardInfoFormProps) {
  const stepRef = useRef(0);

  const calculatedStep = useMemo(() => {
    if (!isCardNumberOk(cardInfo.cardNumber, errorInfo.cardNumberError))
      return 0;
    if (!isCardTypeOk(cardInfo.cardType)) return 1;
    if (
      !isExpirationOk(
        cardInfo.expirationPeriod,
        errorInfo.yearError,
        errorInfo.monthError
      )
    )
      return 2;
    if (!isCVCNumberOk(cardInfo.CVCNumber, errorInfo.CVCError)) return 3;
    if (!isPasswordOk(cardInfo.password, errorInfo.passwordError)) return 4;
    return 5;
  }, [cardInfo, errorInfo]);

  stepRef.current = Math.max(stepRef.current, calculatedStep);

  function isCompletedCardInfo() {
    return calculatedStep === 5;
  }

  return { step: stepRef.current, canSubmit: isCompletedCardInfo() };
}

function isCardNumberOk(
  cardNumber: { isFullFilled: () => boolean },
  cardNumberError: { isError: () => boolean }
) {
  return cardNumber.isFullFilled() && cardNumberError.isError() === false;
}

function isCardTypeOk(cardType: { isFullFilled: () => boolean }) {
  return cardType.isFullFilled();
}

function isExpirationOk(
  expirationPeriod: { isFullFilled: () => boolean },
  year: { isError: () => boolean },
  month: { isError: () => boolean }
) {
  return (
    expirationPeriod.isFullFilled() &&
    year.isError() === false &&
    month.isError() === false
  );
}

function isCVCNumberOk(
  CVCNumber: { isFullFilled: () => boolean },
  CVCError: { isError: () => boolean }
) {
  return CVCNumber.isFullFilled() && CVCError.isError() === false;
}

function isPasswordOk(
  password: { isFullFilled: () => boolean },
  passwordError: { isError: () => boolean }
) {
  return password.isFullFilled() && passwordError.isError() === false;
}

type CardInfoFormProps = {
  cardInfo: {
    cardNumber: State<CardNumberPosition, string>;
    expirationPeriod: State<ExpirationPeriod, string>;
    CVCNumber: State<"CVCNumber", string>;
    password: State<"password", string>;
    cardType: State<"cardType", string>;
  };
  errorInfo: {
    cardNumberError: Error<CardNumberPosition>;
    yearError: Error<"year">;
    monthError: Error<"month">;
    CVCError: Error<"CVCNumber">;
    passwordError: Error<"password">;
  };
};
