import { useState } from "react";
import { isNumber, isUnderMaxLength } from "../validation/validate";
import { setErrorMessage } from "../utils/setErrorMessage";

const CVC_NUMBER = {
  MAX_CVC_LENGTH: 3,
} as const;

const CVC_NUMBER_ERROR = {
  INVALID_LENGTH_ERROR: `CVC 번호는 ${CVC_NUMBER.MAX_CVC_LENGTH}자리 숫자여야 합니다.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
};

export default function useCvcNumber() {
  const [cvcNumbers, setCardCvcNumbers] = useState("");
  const [cvcNumbersError, setError] = useState([""]);

  const validateCvcNumbers = (value: string) => {
    if (!isUnderMaxLength(value.length, CVC_NUMBER.MAX_CVC_LENGTH)) {
      setErrorMessage(
        cvcNumbersError,
        CVC_NUMBER_ERROR.INVALID_LENGTH_ERROR,
        0,
        setError
      );
      return false;
    }

    if (!isNumber(value)) {
      setErrorMessage(
        cvcNumbersError,
        CVC_NUMBER_ERROR.NOT_NUMBERIC_ERROR,
        0,
        setError
      );
      return false;
    }

    setErrorMessage(cvcNumbersError, "", 0, setError);
    return true;
  };

  const onCvcNumberChange = (value: string) => {
    if (!validateCvcNumbers(value)) return;
    setCardCvcNumbers(value.slice(0, CVC_NUMBER.MAX_CVC_LENGTH));
  };

  return {
    cvcNumbers,
    cvcNumbersError: cvcNumbersError[0],
    onCvcNumberChange,
  };
}
