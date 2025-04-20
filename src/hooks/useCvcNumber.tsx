import { useState } from "react";
import { isNumber, isValidLength } from "../validation/validate";
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

  const cvcNumbersValidate = (value: string) => {
    setCardCvcNumbers(value.slice(0, CVC_NUMBER.MAX_CVC_LENGTH));

    if (!isValidLength(value.length, CVC_NUMBER.MAX_CVC_LENGTH)) {
      setErrorMessage(
        cvcNumbersError,
        CVC_NUMBER_ERROR.INVALID_LENGTH_ERROR,
        0,
        setError
      );
      return;
    }

    if (!isNumber(value)) {
      setErrorMessage(
        cvcNumbersError,
        CVC_NUMBER_ERROR.NOT_NUMBERIC_ERROR,
        0,
        setError
      );
      return;
    }

    setErrorMessage(cvcNumbersError, "", 0, setError);
  };

  return {
    cvcNumbers,
    cvcNumbersError: cvcNumbersError[0],
    cvcNumbersValidate,
  };
}
