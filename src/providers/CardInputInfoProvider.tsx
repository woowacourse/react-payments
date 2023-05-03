import React, { useMemo, useState } from 'react';
import { CardInputInfo } from '@type/card';
import { CARD_COMPANY } from '@constants/cardCompany';

interface CardInputInfoContextProps {
  cardInputInfo: CardInputInfo;
  setCardInputInfo: (cardInfo: CardInputInfo) => void;
}

const defaultValue = {
  company: CARD_COMPANY.DEFAULT,
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expirationDate: {
    month: '',
    year: '',
  },
  owner: '',
};

const CardInputInfoContext = React.createContext<CardInputInfoContextProps>({
  cardInputInfo: defaultValue,
  setCardInputInfo: () => {},
});

function CardInputInfoContextProvider({ children }: React.PropsWithChildren) {
  const [cardInputInfo, setCardInputInfo] =
    useState<CardInputInfo>(defaultValue);

  const memoizedValue = useMemo(
    () => ({ cardInputInfo, setCardInputInfo }),
    [cardInputInfo]
  );

  return (
    <CardInputInfoContext.Provider
      value={{
        cardInputInfo: memoizedValue.cardInputInfo,
        setCardInputInfo: memoizedValue.setCardInputInfo,
      }}
    >
      {children}
    </CardInputInfoContext.Provider>
  );
}

export { CardInputInfoContext, CardInputInfoContextProvider };
