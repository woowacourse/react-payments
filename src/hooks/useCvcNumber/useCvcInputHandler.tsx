import { useState } from "react";

const CVC_RULE = {
  INVALID_LENGTH_ERROR: "CVC 번호는 3자리 숫자여야 합니다.",
  MAX_LENGTH: 3,
} as const;

export default function useCvcInputHandler(
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>,
  onComplete: () => void
) {
  const [numbers, setNumbers] = useState("");
  const [error, setError] = useState("");

  const handleCardCvcNumberChange = (value: string) => {
    if (value.length > CVC_RULE.MAX_LENGTH) return;

    const validationError =
      value.length < CVC_RULE.MAX_LENGTH ? CVC_RULE.INVALID_LENGTH_ERROR : "";

    setNumbers(value);
    setError(validationError);

    const isComplete =
      value.length === CVC_RULE.MAX_LENGTH && validationError === "";
    setCompleted(isComplete);

    if (isComplete) {
      onComplete();
    }
  };

  return {
    handleCardCvcNumberChange,
    numbers,
    error,
  };
}
