import { CardIssuer, isCardIssuer } from "../constants/cardIssuers";
import { useEffect, useRef, useState } from "react";

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
  isDoneThisStep: boolean;
  cardIssuerSelectProps: CardIssuerSelectProps;
}

const useCardIssuer = (): UseCardIssuerReturnType => {
  const [valueState, setValueState] = useState<CardIssuer | "">("");
  const [errorState, setErrorState] = useState<CardIssuerErrorState>({
    isError: false,
    errorMessage: "",
  });

  const { flag: isDoneThisStep, setTrue: updateDone } = useBoolean();

  const selectRef = useRef<HTMLSelectElement>(null);

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
    if (isDoneThisStep) {
      return;
    }
    if (isCardIssuer(valueState)) {
      updateDone();
    }
  }, [valueState]);

  return {
    isDoneThisStep,
    cardIssuerSelectProps: {
      valueState,
      errorState,
      selectRef: selectRef,
      onChange,
      onBlur,
    },
  };
};

export default useCardIssuer;
