import { useEffect, useMemo, useState } from "react";
import {
  CardNumberPosition,
  ExpirationPeriod,
} from "../../../types/index.types";

type CardInfoFormProps = {
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
  cardNumberError: {
    error: Record<CardNumberPosition, string>;
    isError: () => boolean;
  };
  year: {
    error: Record<"year", string>;
    isError: () => boolean;
  };
  month: {
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

export default function useStep({
  cardNumber,
  expirationPeriod,
  CVCNumber,
  password,
  cardType,
  cardNumberError,
  year,
  month,
  CVCError,
  passwordError,
}: CardInfoFormProps) {
  const calculatedStep = useMemo(() => {
    if (!isCardNumberOk(cardNumber, cardNumberError)) return 0;
    if (!isCardTypeOk(cardType)) return 1;
    if (!isExpirationOk(expirationPeriod, year, month)) return 2;
    if (!isCVCNumberOk(CVCNumber, CVCError)) return 3;
    if (!isPasswordOk(password, passwordError)) return 4;
    return 5;
  }, [
    cardNumber,
    cardNumberError.error,
    cardType,
    expirationPeriod,
    month.error,
    year.error,
    CVCNumber,
    CVCError.error,
    password,
  ]);

  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep((prevStep) => Math.max(prevStep, calculatedStep));
  }, [calculatedStep]);

  function isCompletedCardInfo() {
    return calculatedStep === 5;
  }

  return { step, canSubmit: isCompletedCardInfo() };
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
