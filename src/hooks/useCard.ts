import { useContext } from "react";
import { CardContext, CardContextType } from "../contexts/CardContext";

export const useCard = (): CardContextType => {
  const context = useContext(CardContext);
  if (context === null) {
    throw new Error("CardContext must be used within a CardProvider");
  }
  return context;
};
