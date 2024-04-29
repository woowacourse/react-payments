import { useEffect, useMemo, useRef, useState } from "react";

import { CardExpirationDateInputProps } from "../components/payment/CardEnrollForm/CardExpirationDateInput";
import isNumericString from "../utils/isNumericString";
import useBoolean from "./common/useBoolean";

// 아예 입력을 못하게 하는 validation
const validateToBlock = {
  month: (inputValue: string) => {
    if (!isNumericString(inputValue)) {
      throw new Error("월은 숫자만 입력할 수 있어요");
    }
  },
  year: (inputValue: string) => {
    if (!isNumericString(inputValue)) {
      throw new Error("년도는 숫자만 입력할 수 있어요");
    }
  },
};

// 에러 상태 표시는 하지만, 입력을 허용하는 validation
const validateToInform = {
  month: (expirationMonth: string) => {
    if (expirationMonth.length !== 2) {
      throw new Error("월은 'MM' 형식으로 입력해 주세요");
    }

    if (Number(expirationMonth) < 1 || Number(expirationMonth) > 12) {
      throw new Error("월은 01 ~ 12 범위로 입력해 주세요");
    }
  },
  year: (expirationYear: string) => {
    if (expirationYear.length !== 2) {
      throw new Error("년도는 'YY' 형식으로 입력해 주세요");
    }

    if (!isValidExpirationYear(expirationYear)) {
      throw new Error("유효한 년도를 입력해 주세요");
    }
  },
};

const isValidExpirationYear = (inputYear: string) => {
  const currentYear = new Date().getFullYear();
  const currentYearTwoDigits = currentYear % 100;

  const inputYearNumber = parseInt(inputYear, 10);

  return currentYearTwoDigits <= inputYearNumber;
};

export type CardExpirationKeys = "month" | "year";

export interface CardExpiration {
  month: string;
  year: string;
}

export type CardExpirationRefs = [
  React.RefObject<HTMLInputElement>,
  React.RefObject<HTMLInputElement>,
];

export interface CardExpirationErrorState {
  isError: {
    month: boolean;
    year: boolean;
  };
  errorMessage: string;
}

interface UseCardExpirationReturnType {
  isDoneThisStep: boolean;
  isValid: boolean;
  cardExpirationDateInputProps: CardExpirationDateInputProps;
}
const useCardExpiration = (): UseCardExpirationReturnType => {
  const [valueState, setValueState] = useState<CardExpiration>({
    month: "",
    year: "",
  });

  const [errorState, setErrorState] = useState<CardExpirationErrorState>({
    isError: {
      month: false,
      year: false,
    },
    errorMessage: "",
  });

  const { flag: isDoneThisStep, setTrue: updateDone } = useBoolean();

  const inputRefs: CardExpirationRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const isValid = useMemo(
    () =>
      valueState.month.length > 0 &&
      valueState.year.length > 0 &&
      !errorState.isError.month &&
      !errorState.isError.year,
    [valueState, errorState.isError]
  );

  const updateValueState = (
    inputValue: string,
    targetKey: CardExpirationKeys
  ) => {
    setValueState((prev) => ({
      ...prev,
      [targetKey]: inputValue,
    }));
  };

  const updateErrorState = (
    inputValue: boolean,
    targetKey: CardExpirationKeys,
    errorMessage: string
  ) => {
    setErrorState((prev) => ({
      isError: { ...prev.isError, [targetKey]: inputValue },
      errorMessage,
    }));
  };

  const moveFocusNextFieldIfCompleted = (
    inputValue: string,
    targetKey: CardExpirationKeys
  ) => {
    if (inputValue.length < 2 || targetKey === "year") {
      return;
    }
    if (targetKey === "month") {
      inputRefs[1].current?.focus();
    }
  };

  const onChange =
    (targetKey: CardExpirationKeys) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      try {
        const { value } = event.target;
        validateToBlock[targetKey](value);
        updateValueState(value, targetKey);
        validateToInform[targetKey](value);
        updateErrorState(false, targetKey, "");
        moveFocusNextFieldIfCompleted(value, targetKey);
      } catch (error) {
        if (error instanceof Error) {
          updateErrorState(true, targetKey, error.message);
        }
      }
    };

  useEffect(() => {
    if (isDoneThisStep) {
      return;
    }
    if (valueState.month === "" || valueState.year === "") {
      return;
    }
    if (errorState.isError.month || errorState.isError.year) {
      return;
    }
    updateDone();
  }, [valueState, errorState]);

  return {
    isDoneThisStep,
    isValid,
    cardExpirationDateInputProps: {
      valueState,
      errorState,
      inputRefs,
      onChange,
    },
  };
};

export default useCardExpiration;
