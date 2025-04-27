import { useState } from "react";
import { ErrorAction, Action } from "../types/CardInformationType";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isTypeNumber from "../utils/isTypeNumber";
import { setErrorTrue, setErrorFalse } from "../utils/setError";

const useCvcNumber = ({
  dispatch,
  dispatchError,
}: {
  dispatch: Dispatch<Action>;
  dispatchError: Dispatch<ErrorAction>;
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const type = "SET_CVC_NUMBER_ERROR";

  const handleChange = (v: string) => {
    if (!isTypeNumber(v)) {
      setErrorTrue(type, 0, dispatchError);
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    setErrorFalse(type, 0, dispatchError);

    if (isSameLength(v, 3)) {
      setErrorFalse(type, 0, dispatchError);
    } else {
      setErrorTrue(type, 0, dispatchError);
      setErrorMessage("3글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_CVC_NUMBER", value: v });
  };

  return { errorMessage, handleChange };
};

export default useCvcNumber;
