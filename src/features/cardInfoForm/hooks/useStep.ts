import { useMemo, useRef } from "react";
import {
  CardNumberPosition,
  ExpirationPeriod,
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
    cardNumber: {
      values: Record<CardNumberPosition, string>;
      changeValues: (
        cardNumberPosition: CardNumberPosition,
        cardNumber: string
      ) => void;
      isFullFilled: () => boolean;
    };
    expirationPeriod: {
      values: Record<ExpirationPeriod, string>;
      changeValues: (expirationPeriod: ExpirationPeriod, date: string) => void;
      isFullFilled: () => boolean;
    };
    CVCNumber: {
      values: { CVCNumber: string };
      changeValues: (type: "CVCNumber", CVCNumber: string) => void;
      isFullFilled: () => boolean;
    };
    password: {
      values: { password: string };
      changeValues: (type: "password", password: string) => void;
      isFullFilled: () => boolean;
    };
    cardType: {
      values: { cardType: string };
      changeValues: (type: "cardType", cardType: string) => void;
      isFullFilled: () => boolean;
    };
  };
  errorInfo: {
    cardNumberError: {
      error: Record<CardNumberPosition, string>;
      isError: () => boolean;
    };
    yearError: {
      error: Record<"year", string>;
      isError: () => boolean;
    };
    monthError: {
      error: Record<"month", string>;
      isError: () => boolean;
    };
    CVCError: {
      error: Record<"CVCNumber", string>;
      isError: () => boolean;
    };
    passwordError: {
      error: Record<"password", string>;
      isError: () => boolean;
    };
  };
};
