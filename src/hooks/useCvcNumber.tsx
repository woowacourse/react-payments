import { useState } from "react";
import { Action } from "../types/CardInformationType";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isTypeNumber from "../utils/isTypeNumber";

const useCvcNumber = (dispatch: Dispatch<Action>) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string) => {
    if (!isTypeNumber(v)) {
      setError(true);
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    setError(false);

    if (isSameLength(v, 3)) {
      setError(false);
    } else {
      setError(true);
      setErrorMessage("3글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_CVC_NUMBER", value: v });
  };

  return { error, errorMessage, handleChange };
};

export default useCvcNumber;
