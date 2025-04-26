import { useEffect } from "react";
import { useCardState } from "./useCardState";
import { CARD_VALIDATION_INFO } from "../constants/CardValidationInfo";

export const useCardValidation = (
  cardState: ReturnType<typeof useCardState>
) => {
  const {
    cardNumbers,
    cardNumbersHelperText,
    month,
    year,
    expiryHelperText,
    CVC,
    CVCHelperText,
    password,
    passwordHelperText,
    cardColor,
    isValidCardNumbers,
    isValidCardCompany,
    isValidExpiry,
    isValidCVC,
    isValidPassword,
    setIsValidCardNumbers,
    setIsValidCardCompany,
    setIsValidExpiry,
    setIsValidCVC,
    setIsValidPassword,
    setIsValidForm,
    setShowCardCompanySelect,
    setShowExpiryInput,
    setShowCVCInput,
    setShowPasswordInput,
  } = cardState;

  useEffect(() => {
    const isAllFilled = cardNumbers.every(
      (num) => num.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH
    );
    if (isAllFilled && cardNumbersHelperText === "") {
      setIsValidCardNumbers(true);
      setShowCardCompanySelect(true);
    } else {
      setIsValidCardNumbers(false);
    }
  }, [cardNumbers, cardNumbersHelperText]);

  useEffect(() => {
    if (cardColor !== "#333333") {
      setIsValidCardCompany(true);
      setShowExpiryInput(true);
    } else {
      setIsValidCardCompany(false);
    }
  }, [cardColor]);

  useEffect(() => {
    const isAllFilled =
      month.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH &&
      year.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH;
    if (isAllFilled && expiryHelperText === "") {
      setIsValidExpiry(true);
      setShowCVCInput(true);
    } else {
      setIsValidExpiry(false);
    }
  }, [month, year, expiryHelperText]);

  useEffect(() => {
    if (
      CVC.length === CARD_VALIDATION_INFO.CVC_MAX_LENGTH &&
      CVCHelperText === ""
    ) {
      setIsValidCVC(true);
      setShowPasswordInput(true);
    } else {
      setIsValidCVC(false);
    }
  }, [CVC, CVCHelperText]);

  useEffect(() => {
    if (
      password.length === CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH &&
      passwordHelperText === ""
    ) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  }, [password, passwordHelperText]);

  useEffect(() => {
    if (
      isValidCardNumbers &&
      isValidCardCompany &&
      isValidExpiry &&
      isValidCVC &&
      isValidPassword
    ) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [
    isValidCardNumbers,
    isValidCardCompany,
    isValidExpiry,
    isValidCVC,
    isValidPassword,
  ]);
};
