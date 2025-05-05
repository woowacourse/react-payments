import { useState } from "react";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isTypeNumber from "../utils/isTypeNumber";
import { Action, ErrorAction } from "../types/CardInformationType";

const usePassword = (dispatch: Dispatch<Action>, dispatchError: Dispatch<ErrorAction>) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string) => {
    if (!isTypeNumber(v)) {
      dispatchError({ type: "SET_PASSWORD_ERROR", value: true });
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    dispatchError({ type: "SET_PASSWORD_ERROR", value: false });

    if (isSameLength(v, 2)) {
      dispatchError({ type: "SET_PASSWORD_ERROR", value: false });
    } else {
      dispatchError({ type: "SET_PASSWORD_ERROR", value: true });
      setErrorMessage("2글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_PASSWORD", value: v });
  };

  return { errorMessage, handleChange };
};

export default usePassword;
