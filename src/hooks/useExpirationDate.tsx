import { useState } from "react";
import { ErrorAction, Action } from "../types/CardInformationType";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isMonth from "../utils/isMonth";
import isTypeNumber from "../utils/isTypeNumber";
import { setErrorTrue, setErrorFalse } from "../utils/setError";

const useExpirationDate = ({
  dispatch,
  dispatchError,
  inputRefs,
}: {
  dispatch: Dispatch<Action>;
  dispatchError: Dispatch<ErrorAction>;
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const type = "SET_EXPIRATION_DATE_ERROR";

  const handleChange = (v: string, index: number) => {
    if (!isTypeNumber(v)) {
      setErrorTrue(type, index, dispatchError);
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    setErrorFalse(type, index, dispatchError);

    if (index === 0 && !isMonth(parseInt(v))) {
      dispatch({ type: "SET_EXPIRATION_DATE", index: 0, value: v });
      setErrorTrue(type, index, dispatchError);
      setErrorMessage("1~12 사이의 숫자를 입력해 주세요.");
      return;
    }

    if (index === 1 && !isSameLength(v, 2)) {
      setErrorTrue(type, index, dispatchError);
      setErrorMessage("2글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_EXPIRATION_DATE", index: index, value: v });

    if (v.length === 2 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    return;
  };

  return { errorMessage, handleChange };
};

export default useExpirationDate;
