import { useState } from "react";
import { Action } from "../types/CardInformationType";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isMonth from "../utils/isMonth";
import isTypeNumber from "../utils/isTypeNumber";

const useExpirationDate = ({
  dispatch,
  inputRefs,
}: {
  dispatch: Dispatch<Action>;
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
}) => {
  const [error, setError] = useState([false, false]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string, index: number) => {
    if (!isTypeNumber(v)) {
      const updatedError = [...error];
      updatedError[index] = true;
      setError(updatedError);
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    const updatedError = [...error];
    updatedError[index] = false;
    setError(updatedError);

    if (index === 0 && !isMonth(parseInt(v))) {
      dispatch({ type: "SET_EXPIRATION_DATE", index: 0, value: v });
      const updatedError = [...error];
      updatedError[index] = true;
      setError(updatedError);
      setErrorMessage("1~12 사이의 숫자를 입력해 주세요.");
      return;
    }

    if (index === 1 && !isSameLength(v, 2)) {
      const updatedError = [...error];
      updatedError[index] = true;
      setError(updatedError);
      setErrorMessage("2글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_EXPIRATION_DATE", index: index, value: v });

    if (v.length === 2 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    return;
  };

  return { error, errorMessage, handleChange };
};

export default useExpirationDate;
