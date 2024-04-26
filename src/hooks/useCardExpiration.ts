import { useEffect, useState } from "react";

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

export interface CardExpirationErrorState {
  isError: {
    month: boolean;
    year: boolean;
  };
  errorMessage: string;
}

interface UseCardExpirationReturnType {
  isDone: boolean;
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

  const { flag: isDone, setTrue: updateDone } = useBoolean();

  const updateValueState = (inputValue: string, targetKey: string) => {
    setValueState((prev) => ({
      ...prev,
      [targetKey]: inputValue,
    }));
  };

  const updateErrorState = (
    inputValue: boolean,
    targetKey: string,
    errorMessage: string
  ) => {
    setErrorState((prev) => ({
      isError: { ...prev.isError, [targetKey]: inputValue },
      errorMessage,
    }));
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    targetKey: CardExpirationKeys
  ) => {
    try {
      validateToBlock[targetKey](event.target.value);
      updateValueState(event.target.value, targetKey);
      validateToInform[targetKey](event.target.value);
      updateErrorState(false, targetKey, "");
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState(true, targetKey, error.message);
      }
    }
  };

  useEffect(() => {
    if (isDone) {
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
    isDone,
    cardExpirationDateInputProps: {
      valueState,
      errorState,
      onChange,
    },
  };
};

export default useCardExpiration;
