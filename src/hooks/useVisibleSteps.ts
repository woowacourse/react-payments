import { useEffect, useState } from "react";
import {
  CardPositionType,
  MAGIC_NUMBER,
  PeriodPositionType,
} from "../constants/constants";

interface UseVisibleStepsProps {
  cardNumbers: Record<CardPositionType, string>;
  cardBrand: string;
  expirationPeriod: Record<PeriodPositionType, string>;
  cvcNumber: string;
  password: string;
}

export function useVisibleSteps({
  cardNumbers,
  cardBrand,
  expirationPeriod,
  cvcNumber,
  password,
}: UseVisibleStepsProps) {
  const [visible, setVisible] = useState({
    cardBrand: false,
    expirationPeriod: false,
    cvcNumber: false,
    password: false,
  });

  const isCardNumberComplete = Object.values(cardNumbers).every(
    (num) => num.length === MAGIC_NUMBER.maxLength.cardNumber
  );
  const isExpirationComplete =
    expirationPeriod.month.length === MAGIC_NUMBER.maxLength.expirationPeriod &&
    expirationPeriod.year.length === MAGIC_NUMBER.maxLength.expirationPeriod;
  const isCvcComplete = cvcNumber.length === MAGIC_NUMBER.maxLength.cvcNumber;

  useEffect(() => {
    if (isCardNumberComplete) {
      setVisible((prev) => ({ ...prev, cardBrand: true }));
    }
    if (cardBrand) {
      setVisible((prev) => ({ ...prev, expirationPeriod: true }));
    }
    if (isExpirationComplete) {
      setVisible((prev) => ({ ...prev, cvcNumber: true }));
    }
    if (isCvcComplete) {
      setVisible((prev) => ({ ...prev, password: true }));
    }
  }, [cardNumbers, cardBrand, expirationPeriod, cvcNumber, password]);

  return visible;
}
