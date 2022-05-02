import { useEffect, useState } from "react";

import { Validators } from "../lib/validation";
import { ExpiredDate } from "../stories/Input.stories";
import { CardInfo } from "../types";

export type CardInfoValidation = {
  isCardNumbersValid: boolean;
  isExpiredDateValid: boolean;
  isUserNameValid: boolean;
  isSecurityCodeValid: boolean;
  isPasswordValid: boolean;
};

export const useCardInfoValidation = (cardInfo: CardInfo, validators: Validators) => {
  const [cardInfoValidation, setCardInfoValidation] = useState<CardInfoValidation>({
    isCardNumbersValid: false,
    isExpiredDateValid: false,
    isUserNameValid: false,
    isSecurityCodeValid: false,
    isPasswordValid: false,
  });

  const { cardNumbers, expiredDate, userName, securityCode, password } = cardInfo;

  const handleChangeValidation = (key, value, validator) => {
    setCardInfoValidation(prev => ({
      ...prev,
      [key]: validator(value),
    }));
  };

  useEffect(() => {
    handleChangeValidation("isCardNumbersValid", cardNumbers, validators["cardNumbers"]);
  }, [cardNumbers]);

  useEffect(() => {
    handleChangeValidation("isExpiredDateValid", expiredDate, validators["expiredDate"]);
  }, [ExpiredDate]);

  useEffect(() => {
    handleChangeValidation("isUserNameValid", userName, validators["userName"]);
  }, [userName]);

  useEffect(() => {
    handleChangeValidation("isSecurityCodeValid", securityCode, validators["securityCode"]);
  }, [securityCode]);

  useEffect(() => {
    handleChangeValidation("isPasswordValid", password, validators["password"]);
  }, [password]);

  return cardInfoValidation;
};
