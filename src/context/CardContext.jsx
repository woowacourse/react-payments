import { createContext } from 'react';
import { cardData, cardDispatch } from '../Reducer/CardReducer';

const CardContext = createContext();

function CardContextProvider({ children }) {
  return (
    <CardContext.Provider value={{ cardData, cardDispatch }}>
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardContextProvider };
