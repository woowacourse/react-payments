import { createContext, useState } from "react";

import { defaultCardInfo } from "constants";
import useReady from "hooks/useReady";
import { isInValidCardType } from "util/validator";

export const CardTypeContext = createContext();

const CardTypeProvider = ({ children }) => {
  const [cardTypeInfo, setCardTypeInfo] = useState(defaultCardInfo);
  const [cardTypeReady] = useReady(cardTypeInfo.cardType, isInValidCardType);

  const onClickCardType = ({ cardType, cardName }) => {
    setCardTypeInfo({ cardType, cardName });
  };

  const resetCardTypeInfo = () => {
    setCardTypeInfo({ ...defaultCardInfo });
  };

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
