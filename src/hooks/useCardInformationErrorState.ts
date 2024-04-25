import { useState } from "react";

export interface CardNumbersErrorState {
  isError: [boolean, boolean, boolean, boolean];
  errorMessage: string;
}

interface CardIssuerErrorState {
  isError: boolean;
  errorMessage: string;
}

interface CardExpirationErrorState {
  isError: {
    month: boolean;
    year: boolean;
  };
  errorMessage: string;
}

interface CardOwnerNameErrorState {
  isError: boolean;
  errorMessage: string;
}

interface CardCVCErrorState {
  isError: boolean;
  errorMessage: string;
}

interface CardPasswordErrorState {
  isError: boolean;
  errorMessage: string;
}

export interface CardInformationErrorState {
  cardNumbers: CardNumbersErrorState;
  cardIssuer: CardIssuerErrorState;
  cardExpiration: CardExpirationErrorState;
  cardOwnerName: CardOwnerNameErrorState;
  cardCVC: CardCVCErrorState;
  cardPassword: CardPasswordErrorState;
}

const useCardInformationErrorState = () => {
  const [errorState, setErrorState] = useState<CardInformationErrorState>({
    cardNumbers: { isError: [false, false, false, false], errorMessage: "" },
    cardIssuer: { isError: false, errorMessage: "" },
    cardExpiration: {
      isError: {
        month: false,
        year: false,
      },
      errorMessage: "",
    },
    cardOwnerName: { isError: false, errorMessage: "" },
    cardCVC: { isError: false, errorMessage: "" },
    cardPassword: { isError: false, errorMessage: "" },
  });

  const updateCardNumbersErrorState = ({
    isError,
    errorMessage,
  }: CardNumbersErrorState) => {
    setErrorState((prev) => ({
      ...prev,
      cardNumbers: { isError, errorMessage },
    }));
  };

  const updateCardIssuerErrorState = ({
    isError,
    errorMessage,
  }: CardIssuerErrorState) => {
    setErrorState((prev) => ({
      ...prev,
      cardIssuer: { isError, errorMessage },
    }));
  };

  const updateCardExpirationErrorState = ({
    isError,
    errorMessage,
  }: CardExpirationErrorState) => {
    setErrorState((prev) => ({
      ...prev,
      cardExpiration: { isError, errorMessage },
    }));
  };

  const updateCardOwnerNameErrorState = ({
    isError,
    errorMessage,
  }: CardOwnerNameErrorState) => {
    setErrorState((prev) => ({
      ...prev,
      cardOwnerName: { isError, errorMessage },
    }));
  };

  const updateCVCErrorState = ({
    isError,
    errorMessage,
  }: CardCVCErrorState) => {
    setErrorState((prev) => ({
      ...prev,
      cardCVC: { isError, errorMessage },
    }));
  };

  const updatePasswordErrorState = ({
    isError,
    errorMessage,
  }: CardPasswordErrorState) => {
    setErrorState((prev) => ({
      ...prev,
      cardPassword: { isError, errorMessage },
    }));
  };

  return {
    cardInformationErrorState: errorState,
    updateCardNumbersErrorState,
    updateCardIssuerErrorState,
    updateCardExpirationErrorState,
    updateCardOwnerNameErrorState,
    updateCVCErrorState,
    updatePasswordErrorState,
  };
};

export default useCardInformationErrorState;
