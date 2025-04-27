import { useState } from "react";
import { ErrorAction } from "../types/CardInformationType";
import { Dispatch } from "react";
const MONTH_MIN = 1;
const MONTH_MAX = 12;

const useError = (dispatchError: Dispatch<ErrorAction>, inputType: ErrorAction["type"]) => {
  const [errorMessage, setErrorMessage] = useState("");

  const validateLength = (v: string, index: number, maxLength: number) => {
    if (v.length === maxLength) {
      dispatchError({ type: inputType, index: index, value: false });
      return true;
    }

    dispatchError({ type: inputType, index: index, value: true });
    setErrorMessage(`${maxLength}글자를 입력해 주세요.`);
    return false;
  };

  const validateInputType = (v: string, index: number) => {
    if (/^[0-9]*$/.test(v)) {
      dispatchError({ type: inputType, index: index, value: false });
      return true;
    }

    dispatchError({ type: inputType, index: index, value: true });
    setErrorMessage("숫자만 입력해 주세요.");
    return false;
  };

  const validateMonth = (v: string) => {
    const month = parseInt(v);
    if (month >= MONTH_MIN && month <= MONTH_MAX) {
      dispatchError({ type: inputType, index: 0, value: false });
      return true;
    }

    dispatchError({ type: inputType, index: 0, value: true });
    setErrorMessage("1~12 사이의 숫자를 입력해 주세요.");
    return false;
  };

  return { errorMessage, validateMonth, validateInputType, validateLength };
};

export default useError;
