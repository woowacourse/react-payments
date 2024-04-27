import { useEffect, useRef, useState } from "react";

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

const isAllInputCompleted = (inputValues: string[]) => {
  return inputValues.every((value) => value.length === 4);
};

const isInputCompleted = (inputValue: string) => {
  return inputValue.length === 4;
};

const isLastInputElement = (index: number) => {
  return index === 3;
};

export type CardNumbers = [string, string, string, string];

export type CardNumberRefs = [
  React.RefObject<HTMLInputElement>,
  React.RefObject<HTMLInputElement>,
  React.RefObject<HTMLInputElement>,
  React.RefObject<HTMLInputElement>,
];

export interface CardNumbersErrorState {
  isError: [boolean, boolean, boolean, boolean];
  errorMessage: string;
}

interface UseCardNumbersReturnType {
  isDoneThisStep: boolean;
  cardNumbersInputProps: CardNumbersInputProps;
}

const useCardNumbers = (): UseCardNumbersReturnType => {
  const [valueState, setValueState] = useState<CardNumbers>(["", "", "", ""]);

  const [errorState, setErrorState] = useState<CardNumbersErrorState>({
    isError: [false, false, false, false],
    errorMessage: "",
  });

  const { flag: isDoneThisStep, setTrue: updateDone } = useBoolean();

  const inputRefs: CardNumberRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

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

  const moveFocusNextFieldIfCompleted = (
    inputValue: string,
    targetIndex: number
  ) => {
    if (!isInputCompleted(inputValue) || isLastInputElement(targetIndex)) {
      return;
    }
    inputRefs[targetIndex + 1].current?.focus();
  };

  const onChange =
    (targetIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const { value } = event.target;
        validateOnChange(value);
        updateValueState(value, targetIndex);
        updateErrorState(false, targetIndex, "");
        moveFocusNextFieldIfCompleted(value, targetIndex);
      } catch (error) {
        if (error instanceof Error) {
          updateErrorState(true, targetIndex, error.message);
        }
      }
    };

  const onBlur =
    (targetIndex: number) => (event: React.FocusEvent<HTMLInputElement>) => {
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
    if (isDoneThisStep) {
      return;
    }
    if (isAllInputCompleted(valueState)) {
      updateDone();
    }
  }, [valueState]);

  return {
    isDoneThisStep,
    cardNumbersInputProps: {
      valueState,
      errorState,
      inputRefs,
      onChange,
      onBlur,
    },
  };
};

export default useCardNumbers;
