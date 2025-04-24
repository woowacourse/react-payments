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
}: CardInfoFormProps) {
  const calculatedStep = useMemo(() => {
    if (!cardNumber.isFullFilled() || cardNumberError.isError()) return 0;
    if (!cardType.isFullFilled()) return 1;
    if (!expirationPeriod.isFullFilled() || month.isError() || year.isError())
      return 2;
    if (!CVCNumber.isFullFilled() || CVCError.isError()) return 3;
    if (!password.isFullFilled()) return 4;
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

  return step;
}
