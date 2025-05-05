import { useState } from "react";
import { Action } from "../types/CardInformationType";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isTypeNumber from "../utils/isTypeNumber";

const useUniqueNumber = ({
  dispatch,
  inputRefs,
}: {
  dispatch: Dispatch<Action>;
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
}) => {
  const [error, setError] = useState([false, false, false, false]);
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

    if (isSameLength(v, 4)) {
      const updatedError = [...error];
      updatedError[index] = false;
      setError(updatedError);
    } else {
      const updatedError = [...error];
      updatedError[index] = true;
      setError(updatedError);
      setErrorMessage("4글자를 입력해 주세요.");
    }

    dispatch({ type: "SET_UNIQUE_NUMBER", index: index, value: v });

    if (v.length === 4 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return { error, errorMessage, handleChange };
};

export default useUniqueNumber;
