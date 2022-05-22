import React, { createContext, useCallback, useState } from "react";

import { defaultCardInfo } from "constants/index";
import useReady from "hooks/useReady";
import { isInValidCardType } from "util/validator";
import { CardTypeInfoType } from "types";

interface InitialContextState {
  cardTypeInfo: CardTypeInfoType;
  cardTypeReady: boolean;
}

interface InitialContextValue {
  state: InitialContextState;
  action: {
    onClickCardType: ({ cardType, cardName }: CardTypeInfoType) => void;
    resetCardTypeInfo: () => void;
    setCardTypeInfo: React.Dispatch<React.SetStateAction<CardTypeInfoType>>;
  };
}

export const CardTypeContext = createContext<InitialContextValue | null>(null);

const CardTypeProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardTypeInfo, setCardTypeInfo] =
    useState<CardTypeInfoType>(defaultCardInfo);
  const [cardTypeReady] = useReady(cardTypeInfo.cardType, isInValidCardType);

  const onClickCardType = ({ cardType, cardName }: CardTypeInfoType) => {
    setCardTypeInfo({ cardType, cardName });
  };

  const resetCardTypeInfo = useCallback(() => {
    setCardTypeInfo({ ...defaultCardInfo });
  }, []);

  return (
    <CardTypeContext.Provider
      value={{
        state: { cardTypeInfo, cardTypeReady },
        action: { onClickCardType, resetCardTypeInfo, setCardTypeInfo },
      }}
    >
      {children}
    </CardTypeContext.Provider>
  );
};

export default CardTypeProvider;
