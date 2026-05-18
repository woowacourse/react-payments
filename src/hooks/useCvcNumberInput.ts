import { useState } from "react";
import { isNumeric } from "../utils/validators";

const initialState = {
  cvc: "",
  cvcError: "",
};

export function useCvcNumberInput() {
  const [cvc, setCvc] = useState(initialState.cvc);
  const [cvcError, setCvcError] = useState(initialState.cvcError);

  const setCvcServerError = (message: string) => {
    setCvcError(message);
  };

  const handleCvcChange = (value: string) => {
    const onlyNumbers = value.replace(/[^0-9]/g, "");
    const sliceValue = onlyNumbers.substring(0, 3);

    if (!isNumeric(value)) {
      setCvcError("숫자를 입력해주세요.");
    } else {
      setCvcError("");
    }

    setCvc(sliceValue);
  };

  const handleBlur = () => {
    if (cvc.length < 3) {
      setCvcError("완전히 입력해 주세요.");
      return;
    }
  };

  return { cvc, cvcError, handleCvcChange, handleBlur, setCvcServerError };
}
