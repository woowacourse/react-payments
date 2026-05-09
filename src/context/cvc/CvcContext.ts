import { createContext } from "react";
import { useContext } from "react";
import { type CvcContextValue } from "../../types/types";

export const CvcContext = createContext<CvcContextValue | null>(null);

export function useCvcContext() {
  const context = useContext(CvcContext);

  if (context === null) {
    throw Error("CvcProvider 안에서 사용해 주세요.");
  }

  return context;
}
