import { useContext } from "react";
import {
  CardValidationContext,
  CardValidationContextType,
} from "./../contexts/CardValidationContext";

export const useCardValidation = (): CardValidationContextType => {
  const context = useContext(CardValidationContext);
  if (context === null) {
    throw new Error(
      "CardValidationContext must be used within a CardValidationProvider"
    );
  }
  return context;
};
