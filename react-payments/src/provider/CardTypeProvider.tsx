import { createContext, useState } from "react";
import { defaultCardInfo } from "../constants";
import useReady from "../hooks/useReady";
import { CardType, CardTypeContextProvider } from "../types";
import { isInValidCardType } from "../util/validator";

export const CardTypeContext = createContext<CardTypeContextProvider>({
  state: { cardTypeInfo: defaultCardInfo, cardTypeReady: false },
  action: {
    onClickCardType: ({ cardType, cardName }) => null,
    resetCardTypeInfo: () => null,
  },
});

const CardTypeProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardTypeInfo, setCardTypeInfo] = useState(defaultCardInfo);
  const [cardTypeReady] = useReady(cardTypeInfo.cardType, isInValidCardType);

  const onClickCardType = ({ cardType, cardName }: CardType) => {
    setCardTypeInfo({ cardType, cardName });
  };

  const resetCardTypeInfo = () => {
    setCardTypeInfo(defaultCardInfo);
  };

  return (
    <CardTypeContext.Provider
      value={{
        state: { cardTypeInfo, cardTypeReady },
        action: { onClickCardType, resetCardTypeInfo },
      }}
    >
      {children}
    </CardTypeContext.Provider>
  );
};

export default CardTypeProvider;
