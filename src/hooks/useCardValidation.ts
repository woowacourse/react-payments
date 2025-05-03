import { useEffect } from "react";
import { useCardState } from "./useCardState";

export const useCardValidation = (
  cardState: ReturnType<typeof useCardState>
) => {
  const {
    isValidCardNumbers,
    isValidCardCompany,
    isValidExpiry,
    isValidCVC,
    isValidPassword,
    setIsValidForm,
  } = cardState;

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
