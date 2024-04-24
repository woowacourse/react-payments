import { Dispatch, SetStateAction, createContext, useState } from "react";

const initCardNumbersValue: CardNumbers = {
  firstNumbers: undefined,
  secondNumbers: undefined,
  thirdNumbers: undefined,
  fourthNumbers: undefined,
};

const initCardValidityPeriodValue: CardValidityPeriod = {
  month: undefined,
  year: undefined,
};

const initCardOwnerInfoValue: CardOwnerInfo = {
  name: undefined,
};

const initCardIssuer: CardIssuer = {
  name: undefined,
};

const initCardCVC: CardCVC = {
  value: undefined,
};

const initCardPassword: CardPassword = {
  value: undefined,
};

export const CardNumbersContext = createContext<[CardNumbers, Dispatch<SetStateAction<CardNumbers>>] | null>(null);
export const CardValidityPeriodContext = createContext<
  [CardValidityPeriod, Dispatch<SetStateAction<CardValidityPeriod>>] | null
>(null);
export const CardOwnerInfoContext = createContext<[CardOwnerInfo, Dispatch<SetStateAction<CardOwnerInfo>>] | null>(
  null
);
export const CardIssuerContext = createContext<[CardIssuer, Dispatch<SetStateAction<CardIssuer>>] | null>(null);
export const CardCVCContext = createContext<[CardCVC, Dispatch<SetStateAction<CardCVC>>] | null>(null);
export const CardPasswordContext = createContext<[CardPassword, Dispatch<SetStateAction<CardPassword>>] | null>(null);

const CardInfoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const cardNumbersState = useState(initCardNumbersValue);
  const cardValidityPeriodState = useState(initCardValidityPeriodValue);
  const cardOwnerInfoState = useState(initCardOwnerInfoValue);
  const cardIssuerState = useState(initCardIssuer);
  const cardCVCState = useState(initCardCVC);
  const cardPasswordState = useState(initCardPassword);

  return (
    <CardNumbersContext.Provider value={cardNumbersState}>
      <CardValidityPeriodContext.Provider value={cardValidityPeriodState}>
        <CardOwnerInfoContext.Provider value={cardOwnerInfoState}>
          <CardIssuerContext.Provider value={cardIssuerState}>
            <CardCVCContext.Provider value={cardCVCState}>
              <CardPasswordContext.Provider value={cardPasswordState}>{children}</CardPasswordContext.Provider>
            </CardCVCContext.Provider>
          </CardIssuerContext.Provider>
        </CardOwnerInfoContext.Provider>
      </CardValidityPeriodContext.Provider>
    </CardNumbersContext.Provider>
  );
};

export default CardInfoContextProvider;
