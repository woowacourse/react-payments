import { createContext, useContext } from "react";
import { type CardNumberContextValue } from "../../types/types";

export const CardNumberContext = createContext<CardNumberContextValue | null>(
  null,
);

export function useCardNumberContext() {
  const context = useContext(CardNumberContext);

  if (context === null) {
    throw new Error("CardNumberProvider 안에서 사용해주세요.");
  }

  return context;
}
