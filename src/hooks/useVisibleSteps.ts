import { useEffect, useState } from "react";
import { CardPositionType, PeriodPositionType } from "../constants/constants";

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
    (num) => num.length === 4
  );
  const isExpirationComplete =
    expirationPeriod.month.length === 2 && expirationPeriod.year.length === 2;
  const isCvcComplete = cvcNumber.length === 3;

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
