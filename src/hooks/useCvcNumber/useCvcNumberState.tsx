import { useState } from "react";
import { isValidLength } from "../../validation/validate";
import { updateArrayAt } from "../../utils/updateArrayAt";

const CVC_RULE = {
  INVALID_LENGTH_ERROR: "CVC 번호는 3자리 숫자여야 합니다.",
  MAX_CVC_LENGTH: 3,
} as const;

interface UseCvcNumberReturn {
  cvcNumbers: string;
  cvcNumbersError: string;
  cvcNumbersValidate: (value: string) => void;
}

export default function useCvcNumber(): UseCvcNumberReturn {
  const [cvcNumbers, setCardCvcNumbers] = useState([""]);
  const [cvcNumbersError, setError] = useState([""]);

  const cvcNumbersValidate = (value: string) => {
    if (!isValidLength(value.length, CVC_RULE.MAX_CVC_LENGTH)) {
      updateArrayAt({
        array: cvcNumbersError,
        newValue: CVC_RULE.INVALID_LENGTH_ERROR,
        index: 0,
        setState: setError,
      });

      return;
    }
    const newCvcNumbers = [...cvcNumbers];
    newCvcNumbers[0] = value.slice(0, CVC_RULE.MAX_CVC_LENGTH);
    setCardCvcNumbers(newCvcNumbers);

    updateArrayAt({
      array: cvcNumbersError,
      newValue: "",
      index: 0,
      setState: setError,
    });
  };

  return {
    cvcNumbers: cvcNumbers[0],
    cvcNumbersError: cvcNumbersError[0],
    cvcNumbersValidate,
  };
}
