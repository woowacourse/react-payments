import React, { Dispatch, useContext } from "react";
import { createContext } from "react";
import { CardAction } from "../hooks/type/useCardAction";
import useCard from "../hooks/useCard";

export const CardContext =
  createContext<{
    cardInfo: Card;
    updateCard: Dispatch<CardAction>;
    validateCardInfo: () => void;
  } | null>(null);

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
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
