import { useState } from "react";
import { Action, ErrorAction } from "../types/CardInformationType";
import { Dispatch } from "react";
import isSameLength from "../utils/isSameLength";
import isTypeNumber from "../utils/isTypeNumber";

const useUniqueNumber = ({
  dispatch,
  inputRefs,
  openNextForm,
  uniqueNumberState,
  errorState,
  dispatchError,
}: {
  dispatch: Dispatch<Action>;
  inputRefs: React.RefObject<(HTMLInputElement | null)[]>;
  openNextForm: () => void;
  uniqueNumberState: string[];
  errorState: boolean[];
  dispatchError: Dispatch<ErrorAction>;
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (v: string, index: number) => {
    if (!isTypeNumber(v)) {
      dispatchError({ type: "SET_UNIQUE_NUMBER_ERROR", index, value: true });
      setErrorMessage("숫자만 입력해 주세요.");
      return;
    }
    dispatchError({ type: "SET_UNIQUE_NUMBER_ERROR", index, value: false });

    if (isSameLength(v, 4)) {
      dispatchError({ type: "SET_UNIQUE_NUMBER_ERROR", index, value: false });

      if (errorState.every((v, i) => i === index || !v) && uniqueNumberState.every((v, i) => i === index || v !== "")) {
        openNextForm();
      }
    } else {
      dispatchError({ type: "SET_UNIQUE_NUMBER_ERROR", index, value: true });
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
