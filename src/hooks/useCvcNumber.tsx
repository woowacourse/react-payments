import { useState } from "react";
import { Action, ErrorAction } from "../types/CardInformationType";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isTypeNumber from "../utils/isTypeNumber";

const useCvcNumber = (dispatch: Dispatch<Action>, openNextForm: () => void, dispatchError: Dispatch<ErrorAction>) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string) => {
    if (!isTypeNumber(v)) {
      dispatchError({ type: "SET_CVC_NUMBER_ERROR", value: true });
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    dispatchError({ type: "SET_CVC_NUMBER_ERROR", value: false });

    if (isSameLength(v, 3)) {
      dispatchError({ type: "SET_CVC_NUMBER_ERROR", value: false });
      openNextForm();
    } else {
      dispatchError({ type: "SET_CVC_NUMBER_ERROR", value: true });
      setErrorMessage("3글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_CVC_NUMBER", value: v });
  };

  return { errorMessage, handleChange };
};

export default useCvcNumber;
