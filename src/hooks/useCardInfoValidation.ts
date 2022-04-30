import { useEffect, useState } from "react";

import type { Validators } from "../lib/validation";
import type { CardInfo } from "../types";

export type CardInfoValidation = {
  isCardNumbersValid: boolean;
  isExpirationDateValid: boolean;
  isUserNameValid: boolean;
  isSecurityCodeValid: boolean;
  isPasswordValid: boolean;
};

const useCardInfoValidation = (cardInfo: CardInfo, validators: Validators) => {
  const [cardInfoValidation, setCardInfoValidation] = useState<CardInfoValidation>({
    isCardNumbersValid: false,
    isExpirationDateValid: false,
    isUserNameValid: false,
    isSecurityCodeValid: false,
    isPasswordValid: false,
  });

  const { cardNumbers, expirationDate, userName, securityCode, password } = cardInfo;

  const handleChangeValidation = <T>(key: string, value: T, validator: (value: T) => boolean) => {
    setCardInfoValidation(prev => ({
      ...prev,
      [key]: validator(value),
    }));
  };

  useEffect(() => {
    handleChangeValidation("isCardNumbersValid", cardNumbers, validators["cardNumbers"]);
  }, [cardNumbers, validators]);

  useEffect(() => {
    handleChangeValidation("isExpirationDateValid", expirationDate, validators["expirationDate"]);
  }, [expirationDate, validators]);

  useEffect(() => {
    handleChangeValidation("isUserNameValid", userName, validators["userName"]);
  }, [userName, validators]);

  useEffect(() => {
    handleChangeValidation("isSecurityCodeValid", securityCode, validators["securityCode"]);
  }, [securityCode, validators]);

  useEffect(() => {
    handleChangeValidation("isPasswordValid", password, validators["password"]);
  }, [password, validators]);

  return cardInfoValidation;
};

export default useCardInfoValidation;
