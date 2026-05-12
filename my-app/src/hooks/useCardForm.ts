import { useState } from "react";
import type { CardInfo } from "../types";
import { detectBrand, getFieldConfig } from "../constants/cardBrand";
import { validateCardNumber, validateExpiryDate, validateCvc } from "../utils/validators";

const useCardForm = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    numbers: ["", "", "", ""],
    expiry: ["", ""],
    cvc: "",
    company: "",
    password: "",
  });
  const [step, setStep] = useState(0);

  const brand = detectBrand(cardInfo.numbers.join(""));
  const fieldConfig = getFieldConfig(brand);

  const cardNumberHandler = (numbers: string[]) => {
    const newBrand = detectBrand(numbers.join(""));
    const newConfig = getFieldConfig(newBrand);

    let adjustedNumbers = numbers;
    if (newConfig.length !== numbers.length) {
      adjustedNumbers = Array.from({ length: newConfig.length }, (_, i) => numbers[i] ?? "");
    }

    setCardInfo((prev) => ({ ...prev, numbers: adjustedNumbers }));

    const isNumbersComplete = newConfig.every((len, i) => adjustedNumbers[i]?.length === len);
    if (isNumbersComplete && validateCardNumber(adjustedNumbers).errorIndex === -1) {
      setStep((prev) => Math.max(prev, 1));
    }
  };

  const companyHandler = (company: string) => {
    setCardInfo((prev) => ({ ...prev, company }));
    setStep((prev) => Math.max(prev, 2));
  };

  const expiryHandler = (expiry: string[]) => {
    setCardInfo((prev) => ({ ...prev, expiry }));
    if (expiry.every((e) => e.length === 2) && validateExpiryDate(expiry).errorIndex === -1) {
      setStep((prev) => Math.max(prev, 3));
    }
  };

  const cvcHandler = (cvc: string) => {
    setCardInfo((prev) => ({ ...prev, cvc }));
    if (cvc.length === 3 && validateCvc(cvc).errorIndex === -1) {
      setStep((prev) => Math.max(prev, 4));
    }
  };

  const passwordHandler = (password: string) => {
    setCardInfo((prev) => ({ ...prev, password }));
  };

  const isNumbersValid =
    fieldConfig.every((len, i) => cardInfo.numbers[i]?.length === len) &&
    validateCardNumber(cardInfo.numbers).errorIndex === -1;

  const isExpiryValid =
    cardInfo.expiry.every((e) => e.length === 2) && validateExpiryDate(cardInfo.expiry).errorIndex === -1;

  const isCvcValid = cardInfo.cvc.length === 3 && validateCvc(cardInfo.cvc).errorIndex === -1;

  const isCompanyValid = cardInfo.company !== "";
  const isPasswordValid = cardInfo.password.length === 2;

  const isValid = isNumbersValid && isCompanyValid && isExpiryValid && isCvcValid && isPasswordValid;

  return {
    cardInfo,
    step,
    brand,
    fieldConfig,
    isValid,
    cardNumberHandler,
    companyHandler,
    expiryHandler,
    cvcHandler,
    passwordHandler,
  };
};

export default useCardForm;
