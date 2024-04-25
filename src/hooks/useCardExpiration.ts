import { CardExpirationDateInputProps } from "../components/payment/CardEnrollForm/CardExpirationDateInput";
import isNumericString from "../utils/isNumericString";
import { useState } from "react";

const validate = {
  onChange: {
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
  },
  onBlur: {
    month: (expirationMonth: string) => {
      if (expirationMonth.length !== 2) {
        throw new Error("월을 'MM' 형식으로 입력해 주세요");
      }

      if (Number(expirationMonth) < 1 || Number(expirationMonth) > 12) {
        throw new Error("월을 01 ~ 12 범위로 입력해 주세요");
      }
    },
    year: (expirationYear: string) => {
      if (expirationYear.length !== 2) {
        throw new Error("년도를 'YY' 형식으로 입력해 주세요");
      }

      if (Number(expirationYear) < 24) {
        throw new Error("유효한 년도를 입력해 주세요");
      }
    },
  },
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

const useCardExpiration = (): CardExpirationDateInputProps => {
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
      validate.onChange[targetKey](event.target.value);
      updateValueState(event.target.value, targetKey);
      updateErrorState(false, targetKey, "");
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState(true, targetKey, error.message);
      }
    }
  };

  const onBlur = (
    event: React.FocusEvent<HTMLInputElement>,
    targetKey: CardExpirationKeys
  ) => {
    try {
      validate.onBlur[targetKey](event.target.value);
      updateErrorState(false, targetKey, "");
    } catch (error) {
      if (error instanceof Error) {
        updateErrorState(true, targetKey, error.message);
      }
    }
  };

  return {
    valueState,
    errorState,
    onChange,
    onBlur,
  };
};

export default useCardExpiration;
