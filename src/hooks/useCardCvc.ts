import { useMemo, useRef, useState } from "react";

import { CardCvcInputProps } from "../components/payment/CardEnrollForm/CardCvcInput";
import isNumericString from "../utils/isNumericString";
import useBoolean from "./common/useBoolean";

const validateOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("CVC는 숫자만 입력할 수 있어요");
  }
};

const validateOnblur = (inputValue: string) => {
  if (!(inputValue.length === 3 || inputValue.length === 4)) {
    throw new Error("CVC는 세 자리 또는 네 자리 숫자로 입력해 주세요");
  }
};

export interface CardCvcErrorState {
  isError: boolean;
  errorMessage: string;
}

interface UseCardCvcReturnType {
  isFocused: boolean;
  isDoneThisStep: boolean;
  isValid: boolean;
  cardCvcInputProps: CardCvcInputProps;
}

const useCardCvc = (): UseCardCvcReturnType => {
  const [valueState, setValueState] = useState("");

  const [errorState, setErrorState] = useState<CardCvcErrorState>({
    isError: false,
    errorMessage: "",
  });

  const { flag: isDoneThisStep, setTrue: updateDone } = useBoolean();

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    flag: isFocused,
    setTrue: updateIsFocused,
    setFalse: updateIsBlurred,
  } = useBoolean(false);

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
      if (error instanceof Error) {
        setErrorState({ isError: true, errorMessage: error.message });
      }
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    updateIsBlurred();

    try {
      validateOnblur(event.target.value);
      setErrorState({ isError: false, errorMessage: "" });
      updateDone();
    } catch (error) {
      if (error instanceof Error) {
        setErrorState({ isError: true, errorMessage: error.message });
      }
    }
  };

  const onFocus = () => {
    updateIsFocused();
  };

  return {
    isFocused,
    isDoneThisStep,
    isValid,
    cardCvcInputProps: {
      valueState,
      errorState,
      inputRef,
      onChange,
      onBlur,
      onFocus,
    },
  };
};

export default useCardCvc;
