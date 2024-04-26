import { useEffect, useState } from "react";

import { CardNumbersInputProps } from "../components/payment/CardEnrollForm/CardNumbersInput";
import isNumericString from "../utils/isNumericString";
import useBoolean from "./common/useBoolean";

const validateOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("카드 번호는 숫자만 입력할 수 있어요");
  }
};

const validateOnBlur = (inputValue: string) => {
  if (inputValue.length !== 4) {
    throw new Error("네 자리 수를 입력해주세요");
  }
};

export type CardNumbers = [string, string, string, string];

export interface CardNumbersErrorState {
  isError: [boolean, boolean, boolean, boolean];
  errorMessage: string;
}

interface UseCardNumbersReturnType {
  isDone: boolean;
  cardNumbersInputProps: CardNumbersInputProps;
}

const useCardNumbers = (): UseCardNumbersReturnType => {
  const [valueState, setValueState] = useState<CardNumbers>(["", "", "", ""]);

  const [errorState, setErrorState] = useState<CardNumbersErrorState>({
    isError: [false, false, false, false],
    errorMessage: "",
  });

  const { flag: isDone, setTrue: updateDone } = useBoolean();

  const updateValueState = (inputValue: string, targetIndex: number) => {
    setValueState((prev) => {
      const cardNumbers: CardNumbers = [...prev];
      cardNumbers[targetIndex] = inputValue;
      return cardNumbers;
    });
  };

  const updateErrorState = (
    inputValue: boolean,
    targetIndex: number,
    errorMessage: string
  ) => {
    setErrorState((prev) => ({
      isError: prev.isError.map((isError, index) =>
        index === targetIndex ? inputValue : isError
      ) as CardNumbersErrorState["isError"],
      errorMessage,
    }));
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    targetIndex: number
  ) => {
    try {
      validateOnChange(event.target.value);
      updateValueState(event.target.value, targetIndex);
      updateErrorState(false, targetIndex, "");
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState(true, targetIndex, error.message);
      }
    }
  };

  const onBlur = (
    event: React.FocusEvent<HTMLInputElement>,
    targetIndex: number
  ) => {
    try {
      validateOnBlur(event.target.value);
      updateErrorState(false, targetIndex, "");
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState(true, targetIndex, error.message);
      }
    }
  };

  useEffect(() => {
    if (isDone) {
      return;
    }
    if (valueState.every((value) => value.length === 4)) {
      updateDone();
    }
  }, [valueState]);

  return {
    isDone,
    cardNumbersInputProps: {
      valueState,
      errorState,
      onChange,
      onBlur,
    },
  };
};

export default useCardNumbers;
