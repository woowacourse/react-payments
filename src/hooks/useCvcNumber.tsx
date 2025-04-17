import { useState } from "react";
import { isNumber, isValidLength } from "../validation/validate";
import { replaceAt } from "../utils/setErrorMessage";

const CONSTANT_USE_CVC_NUMBER = {
  IS_VALID_LENGTH_ERROR: "CVC 번호는 3자리 숫자여야 합니다.",
  IS_NUMBER_ERROR: "숫자만 입력 가능합니다.",
  MAX_CVC_LENGTH: 3,
} as const;

export default function useCvcNumber() {
  const [cvcNumbers, setCardCvcNumbers] = useState("");
  const [cvcNumbersError, setError] = useState([""]);

  const cvcNumbersValidate = (value: string) => {
    setCardCvcNumbers(value.slice(0, CONSTANT_USE_CVC_NUMBER.MAX_CVC_LENGTH));

    if (!isValidLength(value.length, CONSTANT_USE_CVC_NUMBER.MAX_CVC_LENGTH)) {
      replaceAt({
        array: cvcNumbersError,
        newValue: CONSTANT_USE_CVC_NUMBER.IS_VALID_LENGTH_ERROR,
        index: 0,
        setState: setError,
      });

      return;
    }

    if (!isNumber(value)) {
      replaceAt({
        array: cvcNumbersError,
        newValue: CONSTANT_USE_CVC_NUMBER.IS_NUMBER_ERROR,
        index: 0,
        setState: setError,
      });
      return;
    }
    replaceAt({
      array: cvcNumbersError,
      newValue: "",
      index: 0,
      setState: setError,
    });
  };

  return {
    cvcNumbers,
    cvcNumbersError: cvcNumbersError[0],
    cvcNumbersValidate,
  };
}
