import { createContext, useContext } from "react";
import { type CardBrandContextValue } from "../../types/types";

export const CardBrandContext = createContext<CardBrandContextValue | null>(
  null,
);

export function useCardBrandContext() {
  const context = useContext(CardBrandContext);

  if (context === null) {
    throw Error("CardBrandProvider 안에서 실행해 주세요.");
  }

  return context;
}
