import { useEffect, useState } from "react";

import { cardInfoValidator } from "../lib/validation";
import type { CardInfo } from "../types/cardInfo";

export type CardInfoValidation = {
  isCardNumbersValid: boolean;
  isExpirationDateValid: boolean;
  isSecurityCodeValid: boolean;
  isPasswordValid: boolean;
};

const useCardInfoValidation = (cardInfo: CardInfo) => {
  const [cardInfoValidation, setCardInfoValidation] = useState<CardInfoValidation>({
    isCardNumbersValid: false,
    isExpirationDateValid: false,
    isSecurityCodeValid: false,
    isPasswordValid: false,
  });

  const { cardNumbers, expirationDate, securityCode, password } = cardInfo;

  const handleChangeValidation = <T>(
    key: keyof CardInfoValidation,
    value: T,
    validator: (value: T) => boolean
  ) => {
    setCardInfoValidation(prev => ({
      ...prev,
      [key]: validator(value),
    }));
  };

  useEffect(() => {
    handleChangeValidation("isCardNumbersValid", cardNumbers, cardInfoValidator["cardNumbers"]);
  }, [cardNumbers]);

  useEffect(() => {
    handleChangeValidation(
      "isExpirationDateValid",
      expirationDate,
      cardInfoValidator["expirationDate"]
    );
  }, [expirationDate]);

  useEffect(() => {
    handleChangeValidation("isSecurityCodeValid", securityCode, cardInfoValidator["securityCode"]);
  }, [securityCode]);

  useEffect(() => {
    handleChangeValidation("isPasswordValid", password, cardInfoValidator["password"]);
  }, [password]);

  return cardInfoValidation;
};

export default useCardInfoValidation;
