import { createContext, useReducer, Dispatch, ReactNode } from 'react';
import { CardReducer, initialCardData, CardAction } from 'Reducer/CardReducer';
import { inputtedInfoReducer, initialInputtedInfo, InputAction } from 'Reducer/InputtedInfoReducer';
import { CardData } from 'types/Card';

export type CardContextValue = {
  inputtedInfo: CardData;
  inputtedInfoDispatch: Dispatch<InputAction>;
  cardData: CardData[];
  cardDispatch: Dispatch<CardAction>;
};

const CardContext = createContext<CardContextValue | null>(null);

function CardContextProvider({ children }: { children: ReactNode }) {
  const [cardData, cardDispatch] = useReducer(CardReducer, initialCardData);
  const [inputtedInfo, inputtedInfoDispatch] = useReducer(inputtedInfoReducer, initialInputtedInfo);

  return (
    <CardContext.Provider value={{ inputtedInfo, inputtedInfoDispatch, cardData, cardDispatch }}>
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardContextProvider };
