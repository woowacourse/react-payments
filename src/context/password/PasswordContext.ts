import { createContext } from "react";
import { useContext } from "react";
import { type PasswordContextValue } from "../../types/types";

export const PasswordContext = createContext<PasswordContextValue | null>(null);

export function usePasswordContext() {
  const context = useContext(PasswordContext);

  if (context === null) {
    throw Error("PasswordProvider 안에서 사용해 주세요.");
  }

  return context;
}
