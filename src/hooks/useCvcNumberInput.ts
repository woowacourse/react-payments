import { useState } from "react";
import { type SetCvcNumber } from "../types/types";
import { isNumeric } from "../utils/validators";

export function useCvcNumberInput(setCvc: SetCvcNumber) {
  const [cvcError, setCvcError] = useState("");

  const handleCvcChange = (value: string) => {
    if (!isNumeric(value)) {
      setCvcError("숫자를 입력해주세요.");
      return;
    }

    setCvcError("");
    setCvc(value);
  };

  return { cvcError, handleCvcChange };
}
