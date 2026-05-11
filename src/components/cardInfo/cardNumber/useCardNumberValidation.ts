import { useState } from "react";
import { validateCardNumberLength, validateNumber } from "../validator";

//카드 번호를 정확히 입력했는지 확인하는 함수
export function useCardNumberValidation() {
  const [error, setError] = useState("");

  const validate = (updatedCardNumber: string[]): boolean => {
    for (const segment of updatedCardNumber) {
      const numberResult = validateNumber(segment);
      if (!numberResult.state) {
        setError(numberResult.message);
        return false;
      }
    }

    const lengthResult = validateCardNumberLength(updatedCardNumber);
    setError(lengthResult.state ? "" : lengthResult.message);

    return true;
  };

  return { error, validate };
}
