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

const initCardIssuerError: CardIssuerError = {
  name: initError(),
};

const initCardCVCError: CardCVCError = {
  value: initError(),
};

const initCardPasswordError: CardPasswordError = {
  value: initError(),
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
export const CardIssuerErrorContext = createContext<
  [CardIssuerError, Dispatch<SetStateAction<CardIssuerError>>] | null
>(null);
export const CardCVCErrorContext = createContext<[CardCVCError, Dispatch<SetStateAction<CardCVCError>>] | null>(null);
export const CardPasswordErrorContext = createContext<
  [CardPasswordError, Dispatch<SetStateAction<CardPasswordError>>] | null
>(null);

const FormContextProvider = ({ children }: { children: React.ReactNode }) => {
  const cardNumberErrorState = useState(initCardNumbersError);
  const cardValidityPeriodErrorState = useState(initCardValidityPeriod);
  const cardOwnerInfoErrorState = useState(initCardOwnerInfo);
  const cardIssuerErrorContextState = useState(initCardIssuerError);
  const cardCVCErrorContextState = useState(initCardCVCError);
  const cardPasswordErrorState = useState(initCardPasswordError);

  return (
    <CardNumberErrorContext.Provider value={cardNumberErrorState}>
      <CardValidityPeriodErrorContext.Provider value={cardValidityPeriodErrorState}>
        <CardOwnerInfoErrorContext.Provider value={cardOwnerInfoErrorState}>
          <CardIssuerErrorContext.Provider value={cardIssuerErrorContextState}>
            <CardCVCErrorContext.Provider value={cardCVCErrorContextState}>
              <CardPasswordErrorContext.Provider value={cardPasswordErrorState}>
                {children}
              </CardPasswordErrorContext.Provider>
            </CardCVCErrorContext.Provider>
          </CardIssuerErrorContext.Provider>
        </CardOwnerInfoErrorContext.Provider>
      </CardValidityPeriodErrorContext.Provider>
    </CardNumberErrorContext.Provider>
  );
};

export default FormContextProvider;
