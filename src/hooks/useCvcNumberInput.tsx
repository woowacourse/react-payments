import { useState } from "react";
import { isNumber, isUnderMaxLength } from "../validation/validate";

const CVC_NUMBER_LIMIT = {
  MAX_CVC_LENGTH: 4,
} as const;

const CVC_NUMBER_ERROR_MESSAGE = {
  INVALID_LENGTH_ERROR: `CVC 번호는 ${CVC_NUMBER_LIMIT.MAX_CVC_LENGTH}자리 숫자여야 합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
};

export default function useCvcNumberInput() {
  const [cvcNumbers, setCardCvcNumbers] = useState("");
  const [cvcNumbersError, setError] = useState("");

  const validateCvcNumbers = (value: string) => {
    if (!isUnderMaxLength(value.length, CVC_NUMBER_LIMIT.MAX_CVC_LENGTH)) {
      setError(CVC_NUMBER_ERROR_MESSAGE.INVALID_LENGTH_ERROR);
      return false;
    }

    if (!isNumber(value)) {
      setError(CVC_NUMBER_ERROR_MESSAGE.NOT_NUMBERIC_ERROR);
      return false;
    }

    setError("");
    return true;
  };

  const onCvcNumberChange = (value: string) => {
    if (!validateCvcNumbers(value)) return;
    setCardCvcNumbers(value.slice(0, CVC_NUMBER_LIMIT.MAX_CVC_LENGTH));
  };

  return {
    cvcNumbers,
    cvcNumbersError,
    onCvcNumberChange,
  };
}
