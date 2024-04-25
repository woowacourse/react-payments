import { CardIssuer, isCardIssuer } from "../constants/cardIssuers";

import { CardIssuerSelectProps } from "../components/payment/CardEnrollForm/CardIssuerSelect";
import { useState } from "react";

const validateCardIssuerOnBlur = (inputValue: string) => {
  if (inputValue === "") {
    throw new Error("카드사를 선택해 주세요");
  }
};

export interface CardIssuerErrorState {
  isError: boolean;
  errorMessage: string;
}

const useCardIssuer = (): CardIssuerSelectProps => {
  const [valueState, setValueState] = useState<CardIssuer | "">("");
  const [errorState, setErrorState] = useState<CardIssuerErrorState>({
    isError: false,
    errorMessage: "",
  });

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

  return {
    valueState,
    errorState,
    onChange,
    onBlur,
  };
};

export default useCardIssuer;
