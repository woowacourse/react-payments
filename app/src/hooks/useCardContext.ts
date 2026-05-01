import { useContext } from "react";
import { CardContext } from "../context/CardContext";

export function useCardContext() {
  const context = useContext(CardContext);
  if (!context) throw new Error("useCardContext must be used within CardContext");
  return context;
}
