import { useState } from "react";
import { useCardNumberSegments } from "./useCardNumberSegments";
import type { CardFormState } from "../types";

export function useCardForm() {
  const { segments, brand, handleChange: handleCardNumberChange } =
    useCardNumberSegments();

  const [formState, setFormState] = useState({
    cardCompany: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
    cardPassword: "",
  });

  const cardFormState: CardFormState = {
    ...formState,
    cardNumberSegments: segments,
  };

  const handleSetFormState = (newState: CardFormState) => {
    handleCardNumberChange(newState.cardNumberSegments);
    setFormState({
      cardCompany: newState.cardCompany,
      expiryMonth: newState.expiryMonth,
      expiryYear: newState.expiryYear,
      cvc: newState.cvc,
      cardPassword: newState.cardPassword,
    });
  };

  return { cardFormState, brand, handleSetFormState };
}
