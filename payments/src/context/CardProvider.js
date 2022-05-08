import { createContext } from "react";
import useCard from "../hooks/useCard";

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
  const { cardInfo, dispatch, validateCardInfo } = useCard();

  return (
    <CardContext.Provider value={{ cardInfo, dispatch, validateCardInfo }}>
      {children}
    </CardContext.Provider>
  );
};
