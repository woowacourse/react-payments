import { useContext } from "react";
import { createContext } from "react";
import useCard from "../hooks/useCard";

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
  const { cardInfo, updateCard, validateCardInfo } = useCard();

  return (
    <CardContext.Provider value={{ cardInfo, updateCard, validateCardInfo }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) throw new Error("no CardContext");
  return context;
};
