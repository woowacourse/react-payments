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

  const handleBlur = () => {
    if (cvc.length < 3) {
      setCvcError("완전히 입력해 주세요.");
      return;
    }
  };

  return { cvc, cvcError, handleCvcChange, handleBlur };
}
