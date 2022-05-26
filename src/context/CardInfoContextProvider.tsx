import React, { useMemo, useState } from "react";
import { CardInfoStateTypeInterface } from "./CardInfoContext";

interface CardInfoContextInterface {
  state: CardInfoStateTypeInterface;
  setState: (state: CardInfoStateTypeInterface) => void;
}

const initialCardInfoState = {
  cardNumber: ["", "", "", ""],
  expireDate: ["", ""],
  holderName: "",
  securityCodeLength: 0,
  passwordLength: [0, 0],
};

export const CardInfoContext =
  React.createContext<null | CardInfoContextInterface>(null);

export default function CardInfoContextProvider({ children }) {
  const [cardInfo, setCardInfo] = useState(initialCardInfoState);

  const contextValue = useMemo(
    () => ({ state: cardInfo, setState: setCardInfo }),
    [cardInfo, setCardInfo]
  );

  return (
    <CardInfoContext.Provider value={contextValue}>
      {children}
    </CardInfoContext.Provider>
  );
}
