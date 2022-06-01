import React, { Dispatch, useContext } from "react";
import { createContext } from "react";
import { CardListAction } from "../hooks/type/useCardListAction";
import useCardList from "../hooks/useCardList";

export const CardListContext =
  createContext<{
    cardList: Card[];
    updateCardList: Dispatch<CardListAction>;
  } | null>(null);

export const CardListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { cardList, updateCardList } = useCardList();

  return (
    <CardListContext.Provider value={{ cardList, updateCardList }}>
      {children}
    </CardListContext.Provider>
  );
};

export const useCardListContext = () => {
  const context = useContext(CardListContext);
  if (!context) throw new Error("no CardListContext");
  return context;
};
