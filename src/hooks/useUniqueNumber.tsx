import { useState } from "react";
import { ErrorAction, Action } from "../types/CardInformationType";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isTypeNumber from "../utils/isTypeNumber";
import { setErrorTrue, setErrorFalse } from "../utils/setError";

const useUniqueNumber = ({
  dispatch,
  dispatchError,
  inputRefs,
}: {
  dispatch: Dispatch<Action>;
  dispatchError: Dispatch<ErrorAction>;
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const type = "SET_UNIQUE_NUMBER_ERROR";

  const handleChange = (v: string, index: number) => {
    if (!isTypeNumber(v)) {
      setErrorTrue(type, index, dispatchError);
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    setErrorFalse(type, index, dispatchError);

    if (isSameLength(v, 4)) {
      setErrorFalse(type, index, dispatchError);
    } else {
      setErrorTrue(type, index, dispatchError);
      setErrorMessage("4글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_UNIQUE_NUMBER", index: index, value: v });

    if (v.length === 4 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return { errorMessage, handleChange };
};

export default useUniqueNumber;
