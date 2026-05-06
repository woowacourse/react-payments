import { useState } from "react";
import { type SetCardNumber } from "../types/types";
import { isNumeric } from "../utils/validators";

export function useCvcNumberInput(setCvcNumber: SetCardNumber) {
  const [cvcNumberError, setCvcNumberError] = useState([""]);
  const handleCvcNumberChange = (index: number, value: string) => {
    const newError = [...cvcNumberError];

    if (!isNumeric(value)) {
      newError[index] = "숫자를 입력해주세요.";
      setCvcNumberError(newError);
      return;
    }

    newError[index] = "";
    setCvcNumberError(newError);

    setCvcNumber((prev) => {
      const newArray = [...prev];
      newArray[index] = value;
      return newArray;
    });
  };

  return { cvcNumberError, handleCvcNumberChange };
}
