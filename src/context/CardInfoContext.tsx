import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { CardNameObj, CardNumberObj, CardPasswordObj } from "src/interfaces";
import { initialCardInfos } from "src/utils/constant";

export interface CardInfoType {
  cardNumbers: CardNumberObj;
  expireDate: string;
  ownerName: string;
  securityCode: string;
  password: CardPasswordObj;
  cardName: CardNameObj;
}

export const CardInfoContext = createContext<
  [CardInfoType, React.Dispatch<React.SetStateAction<CardInfoType>> | null]
>([initialCardInfos, null]);

export function CardInfoProvider({ children }: PropsWithChildren) {
  const [inputValueContext] = useContext(CardInfoContext);

  const [cardInput, setCardInput] = useState(inputValueContext);

  return (
    <CardInfoContext.Provider value={[cardInput, setCardInput]}>
      {children}
    </CardInfoContext.Provider>
  );
}
