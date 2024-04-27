import { useRef, useState } from "react";

import { CardOwnerNameInputProps } from "../components/payment/CardEnrollForm/CardOwnerNameInput";
import isAlphabetOrWhiteSpace from "../utils/isAlphabetOrWhiteSpace";
import useBoolean from "./common/useBoolean";

const validateOwnerNameOnChange = (inputValue: string) => {
  if (!isAlphabetOrWhiteSpace(inputValue)) {
    throw new Error("영문자만 입력할 수 있어요");
  }
};

const validateOwnerNameOnBlur = (inputValue: string) => {
  if (inputValue.length === 0) {
    throw new Error("카드 소유자 이름을 입력해 주세요");
  }
};

export interface CardOwnerNameErrorState {
  isError: boolean;
  errorMessage: string;
}

interface UseCardOwnerNameReturnType {
  isDoneThisStep: boolean;
  cardOwnerNameInputProps: CardOwnerNameInputProps;
}

const useCardOwnerName = (): UseCardOwnerNameReturnType => {
  const [valueState, setValueState] = useState("");

  const [errorState, setErrorState] = useState<CardOwnerNameErrorState>({
    isError: false,
    errorMessage: "",
  });

  const { flag: isDoneThisStep, setTrue: updateDone } = useBoolean();

  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      validateOwnerNameOnChange(event.target.value);
      const upperName = event.target.value.toUpperCase();
      setValueState(upperName);
      setErrorState({ isError: false, errorMessage: "" });
    } catch (error) {
      if (error instanceof Error) {
        setErrorState({ isError: true, errorMessage: error.message });
      }
    }
  };

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    try {
      validateOwnerNameOnBlur(event.target.value);
      setErrorState({ isError: false, errorMessage: "" });
      updateDone();
    } catch (error) {
      if (error instanceof Error) {
        setErrorState({ isError: true, errorMessage: error.message });
      }
    }
  };

  return {
    isDoneThisStep,
    cardOwnerNameInputProps: {
      valueState,
      errorState,
      inputRef,
      onChange,
      onBlur,
    },
  };
};

export default useCardOwnerName;
