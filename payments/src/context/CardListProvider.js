import { createContext } from "react";
import useCardList from "../hooks/useCardList";

export const CardListContext = createContext(null);

export const CardListProvider = ({ children }) => {
  const { cardList, updateCardList } = useCardList();

  return (
    <CardListContext.Provider value={{ cardList, updateCardList }}>
      {children}
    </CardListContext.Provider>
  );
};
