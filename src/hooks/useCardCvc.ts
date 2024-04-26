import { CardCvcInputProps } from "../components/payment/CardEnrollForm/CardCvcInput";
import isNumericString from "../utils/isNumericString";
import useBoolean from "./common/useBoolean";
import { useState } from "react";

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
  isDone: boolean;
  cardCvcInputProps: CardCvcInputProps;
}

const useCardCvc = (): UseCardCvcReturnType => {
  const [valueState, setValueState] = useState("");

  const [errorState, setErrorState] = useState<CardCvcErrorState>({
    isError: false,
    errorMessage: "",
  });

  const { flag: isDone, setTrue: updateDone } = useBoolean();

  const {
    flag: isFocused,
    setTrue: updateIsFocused,
    setFalse: updateIsBlurred,
  } = useBoolean(false);

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
    isDone,
    cardCvcInputProps: {
      valueState,
      errorState,
      onChange,
      onBlur,
      onFocus,
    },
  };
};

export default useCardCvc;
