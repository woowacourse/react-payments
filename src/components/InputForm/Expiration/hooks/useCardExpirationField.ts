import { useMemo, useRef } from "react";
import {
  validateExpiration,
  validateMonth,
  validateYear,
} from "../../validation";
import { CardInfo } from "../../../../hooks/useCardInfo";

function useCardExpirationField(
  cardInfo: CardInfo,
  maxLength: number,
  handleCardInfo: (key: keyof CardInfo, value: string) => void
) {
  const yearInputRef = useRef<HTMLInputElement>(null);

  const monthValidation = useMemo(
    () => validateMonth(cardInfo.month, maxLength),
    [cardInfo.month, maxLength]
  );

  const yearValidation = useMemo(
    () => validateYear(cardInfo.year, maxLength),
    [cardInfo.year, maxLength]
  );

  const expirationValidation = useMemo(
    () => validateExpiration(cardInfo.month, cardInfo.year, maxLength),
    [cardInfo.month, cardInfo.year, maxLength]
  );

  const errorMessage = useMemo(() => {
    if (!monthValidation.isValid) return monthValidation.errorMessage;
    if (!yearValidation.isValid) return yearValidation.errorMessage;
    if (!expirationValidation.isValid) return expirationValidation.errorMessage;
    return "";
  }, [monthValidation, yearValidation, expirationValidation]);

  const handleMonthChange = (value: string) => {
    handleCardInfo("month", value);

    if (value.length === maxLength) {
      const monthNum = parseInt(value, 10);
      if (monthNum >= 1 && monthNum <= 12) {
        yearInputRef.current?.focus();
      }
    }
  };

  return {
    yearInputRef,
    validation: {
      month: monthValidation,
      year: yearValidation,
      expiration: expirationValidation,
    },
    errorMessage,
    handleMonthChange,
  };
}

export default useCardExpirationField;
