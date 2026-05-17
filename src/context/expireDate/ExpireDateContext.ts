import { createContext, useContext } from "react";
import { type ExpireDateContextValue } from "../../types/types";

export const ExpireDateContext = createContext<ExpireDateContextValue | null>(
  null,
);

export function useExpireDateContext() {
  const context = useContext(ExpireDateContext);

  if (context === null) {
    throw new Error("ExpireDateProvider 안에서 사용해 주세요.");
  }

  return context;
}
