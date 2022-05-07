import { createContext, useReducer } from 'react';
import { CardReducer, initialCardData } from '../Reducer/CardReducer';
import {
  inputtedInfoReducer,
  initialInputtedInfo,
} from '../Reducer/InputtedInfoReducer';

const CardContext = createContext();

function CardContextProvider({ children }) {
  const [cardData, cardDispatch] = useReducer(CardReducer, initialCardData);
  const [inputtedInfo, inputtedInfoDispatch] = useReducer(
    inputtedInfoReducer,
    initialInputtedInfo
  );

  console.log(cardData, inputtedInfo);

  return (
    <CardContext.Provider
      value={{ inputtedInfo, inputtedInfoDispatch, cardData, cardDispatch }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardContextProvider };
