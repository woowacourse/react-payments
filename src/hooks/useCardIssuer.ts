import { CardIssuer, isCardIssuer } from "../constants/cardIssuers";
import { useEffect, useState } from "react";

import { CardIssuerSelectProps } from "../components/payment/CardEnrollForm/CardIssuerSelect";
import useBoolean from "./common/useBoolean";

const validateCardIssuerOnBlur = (inputValue: string) => {
  if (inputValue === "") {
    throw new Error("카드사를 선택해 주세요");
  }
};

export interface CardIssuerErrorState {
  isError: boolean;
  errorMessage: string;
}

interface UseCardIssuerReturnType {
  isDone: boolean;
  cardIssuerSelectProps: CardIssuerSelectProps;
}

const useCardIssuer = (): UseCardIssuerReturnType => {
  const [valueState, setValueState] = useState<CardIssuer | "">("");
  const [errorState, setErrorState] = useState<CardIssuerErrorState>({
    isError: false,
    errorMessage: "",
  });

  const { flag: isDone, setTrue: updateDone } = useBoolean();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!isCardIssuer(event.target.value)) {
      return;
    }
    setValueState(event.target.value);
    setErrorState({ isError: false, errorMessage: "" });
  };

  const onBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    try {
      validateCardIssuerOnBlur(event.target.value);
    } catch (error) {
      if (error instanceof Error) {
        setErrorState({ isError: true, errorMessage: error.message });
      }
    }
  };

  useEffect(() => {
    if (isDone) {
      return;
    }
    if (valueState !== "") {
      updateDone();
    }
  }, [valueState]);

  return {
    isDone,
    cardIssuerSelectProps: {
      valueState,
      errorState,
      onChange,
      onBlur,
    },
  };
};

export default useCardIssuer;
