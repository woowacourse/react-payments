import { useState } from "react";
import { isNumeric } from "../utils/validators";

export function useCvcNumberInput() {
  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState("");

  const handleCvcChange = (value: string) => {
    if (!isNumeric(value)) {
      setCvcError("숫자를 입력해주세요.");
      return;
    }

    setCvcError("");
    setCvc(value);
  };

  return { cvc, cvcError, handleCvcChange };
}
