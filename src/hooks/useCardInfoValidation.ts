import { useEffect, useState } from "react";

import { Validators } from "../lib/validation";
import { CardInfo } from "../types";

export const useCardInfoValidation = (cardInfo: CardInfo, validators: Validators) => {
  const [cardInfoValidation, setCardInfoValidation] = useState({
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
  }, [expiredDate]);

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
