import { useMemo, useRef, useState } from "react";

import { CardPasswordInputProps } from "../components/payment/CardEnrollForm/CardPasswordInput";
import isNumericString from "../utils/isNumericString";

const validateOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("비밀번호는 숫자만 입력할 수 있어요");
  }
};

const validateOnBlur = (inputValue: string) => {
  if (inputValue.length !== 2) {
    throw new Error("비밀번호는 두 자리 숫자로 입력해 주세요");
  }
};

export interface CardPasswordErrorState {
  isError: boolean;
  errorMessage: string;
}

interface UseCardPasswordReturnType {
  isValid: boolean;
  cardPasswordInputProps: CardPasswordInputProps;
}

const useCardPassword = (): UseCardPasswordReturnType => {
  const [valueState, setValueState] = useState("");

  const [errorState, setErrorState] = useState<CardPasswordErrorState>({
    isError: false,
    errorMessage: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const isValid = useMemo(
    () => valueState.length > 0 && !errorState.isError,
    [valueState, errorState.isError]
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      validateOnChange(event.target.value);
      setValueState(event.target.value);
      setErrorState({ isError: false, errorMessage: "" });
    } catch (error) {
      if (!(error instanceof Error)) {
        return;
      }
      setErrorState({
        isError: true,
        errorMessage: error.message,
      });
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    try {
      validateOnBlur(event.target.value);
      setErrorState({ isError: false, errorMessage: "" });
    } catch (error) {
      if (!(error instanceof Error)) {
        return;
      }
      setErrorState({
        isError: true,
        errorMessage: error.message,
      });
    }
  };

  return {
    isValid,
    cardPasswordInputProps: {
      valueState,
      errorState,
      inputRef,
      onChange,
      onBlur,
    },
  };
};

export default useCardPassword;
