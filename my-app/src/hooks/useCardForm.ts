import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CardInfo } from "../types";
import { decideBrandName, getFieldConfig } from "../constants/cardBrand";
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

  const navigate = useNavigate();

  const brand = decideBrandName(cardInfo.numbers.join(""));
  const fieldConfig = getFieldConfig(brand);

  const cardNumberHandler = (numbers: string[]) => {
    const newBrand = decideBrandName(numbers.join(""));
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

  const selectCompanyHandler = (company: string) => {
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

  const isComplete =
    fieldConfig.every((len, i) => cardInfo.numbers[i]?.length === len) &&
    cardInfo.company !== "" &&
    cardInfo.expiry.every((e) => e.length === 2) &&
    cardInfo.cvc.length === 3 &&
    cardInfo.password.length === 2;

  const isValid =
    isComplete &&
    validateCardNumber(cardInfo.numbers).errorIndex === -1 &&
    validateExpiryDate(cardInfo.expiry).errorIndex === -1 &&
    validateCvc(cardInfo.cvc).errorIndex === -1;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/complete", { state: { numbers: cardInfo.numbers, brand } });
  };

  return {
    cardInfo,
    step,
    brand,
    fieldConfig,
    isValid,
    cardNumberHandler,
    selectCompanyHandler,
    expiryHandler,
    cvcHandler,
    passwordHandler,
    handleSubmit,
  };
};

export default useCardForm;
