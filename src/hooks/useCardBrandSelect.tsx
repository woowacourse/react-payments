import { useState } from "react";
import { CARD_STEP } from "../constants/CardStep";

export default function useCardBrandSelect(handleStep: () => void) {
  const [cardBrand, setCardBrand] = useState("");
  const [cardBrandError, setCardBrandError] = useState("");

  const onCardBrandChange = (value: string, step: number) => {
    setCardBrand(value);
    setCardBrandError("");

    if (value && step === CARD_STEP.BRAND) handleStep();
  };

  return {
    cardBrand,
    cardBrandError,
    onCardBrandChange,
  };
}
