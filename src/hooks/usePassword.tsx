import { useState } from "react";
import { ErrorAction, Action } from "../types/CardInformationType";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isTypeNumber from "../utils/isTypeNumber";
import { setErrorTrue, setErrorFalse } from "../utils/setError";

const usePassword = ({
  dispatch,
  dispatchError,
}: {
  dispatch: Dispatch<Action>;
  dispatchError: Dispatch<ErrorAction>;
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const type = "SET_PASSWORD_ERROR";

  const handleChange = (v: string) => {
    if (!isTypeNumber(v)) {
      setErrorTrue(type, 0, dispatchError);
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    setErrorFalse(type, 0, dispatchError);

    if (isSameLength(v, 2)) {
      setErrorFalse(type, 0, dispatchError);
    } else {
      setErrorTrue(type, 0, dispatchError);
      setErrorMessage("2글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_PASSWORD", value: v });
  };

  return { errorMessage, handleChange };
};

export default usePassword;
