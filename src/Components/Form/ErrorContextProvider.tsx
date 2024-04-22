import { Dispatch, SetStateAction, createContext, useState } from "react";

const initError = () => ({
  errorMessage: "",
  isError: false,
});

const initCardNumbersError: CardNumbersError = {
  firstNumbers: initError(),
  secondNumbers: initError(),
  thirdNumbers: initError(),
  fourthNumbers: initError(),
};

const initCardValidityPeriod: CardValidityPeriodError = {
  month: initError(),
  year: initError(),
};

const initCardOwnerInfo: CardOwnerInfoError = {
  name: initError(),
};

export const CardNumberErrorContext = createContext<
  [CardNumbersError, Dispatch<SetStateAction<CardNumbersError>>] | null
>(null);
export const CardValidityPeriodErrorContext = createContext<
  [CardValidityPeriodError, Dispatch<SetStateAction<CardValidityPeriodError>>] | null
>(null);
export const CardOwnerInfoErrorContext = createContext<
  [CardOwnerInfoError, Dispatch<SetStateAction<CardOwnerInfoError>>] | null
>(null);

const ErrorContextProvider = ({ children }: { children: React.ReactNode }) => {
  const cardNumberErrorState = useState(initCardNumbersError);
  const cardValidityPeriodErrorState = useState(initCardValidityPeriod);
  const cardOwnerInfoErrorState = useState(initCardOwnerInfo);

  return (
    <CardNumberErrorContext.Provider value={cardNumberErrorState}>
      <CardValidityPeriodErrorContext.Provider value={cardValidityPeriodErrorState}>
        <CardOwnerInfoErrorContext.Provider value={cardOwnerInfoErrorState}>
          {children}
        </CardOwnerInfoErrorContext.Provider>
      </CardValidityPeriodErrorContext.Provider>
    </CardNumberErrorContext.Provider>
  );
};

export default ErrorContextProvider;
