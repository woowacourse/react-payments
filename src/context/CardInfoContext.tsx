import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";
import { CardInfoProps } from "src/interfaces";
import { initialCardInfos } from "src/utils/constant";

export const CardInfoContext = createContext<
  [CardInfoProps, React.Dispatch<React.SetStateAction<CardInfoProps>> | null]
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
