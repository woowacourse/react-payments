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

export const CardNumbersContext = createContext<[CardNumbers, Dispatch<SetStateAction<CardNumbers>>] | null>(null);
export const CardValidityPeriodContext = createContext<
  [CardValidityPeriod, Dispatch<SetStateAction<CardValidityPeriod>>] | null
>(null);
export const CardOwnerInfoContext = createContext<[CardOwnerInfo, Dispatch<SetStateAction<CardOwnerInfo>>] | null>(
  null
);

const CardInfoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const cardNumbersState = useState(initCardNumbersValue);
  const cardValidityPeriodState = useState(initCardValidityPeriodValue);
  const cardOwnerInfoState = useState(initCardOwnerInfoValue);

  return (
    <CardNumbersContext.Provider value={cardNumbersState}>
      <CardValidityPeriodContext.Provider value={cardValidityPeriodState}>
        <CardOwnerInfoContext.Provider value={cardOwnerInfoState}>{children}</CardOwnerInfoContext.Provider>
      </CardValidityPeriodContext.Provider>
    </CardNumbersContext.Provider>
  );
};

export default CardInfoContextProvider;
