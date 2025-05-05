import { useState } from "react";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isTypeNumber from "../utils/isTypeNumber";
import { Action } from "../types/CardInformationType";

const usePassword = (dispatch: Dispatch<Action>) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string) => {
    if (!isTypeNumber(v)) {
      setError(true);
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    setError(false);

    if (isSameLength(v, 2)) {
      setError(false);
    } else {
      setError(true);
      setErrorMessage("2글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_PASSWORD", value: v });
  };

  return { error, errorMessage, handleChange };
};

export default usePassword;
