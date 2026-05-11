import { useState } from "react";
import { validateCardNumberLength, validateNumber } from "../validator";

//카드 번호를 정확히 입력했는지 확인하는 함수
export function useCardNumberValidation() {
  const [error, setError] = useState("");

  const validateInput = (newValue: string): boolean => {
    const result = validateNumber(newValue);
    if (!result.state) setError(result.message);
    return result.state;
  };

  const validateLength = (cardNumber: string[]) => {
    const result = validateCardNumberLength(cardNumber);
    setError(result.state ? "" : result.message);
  };

  return { error, validateInput, validateLength };
}
