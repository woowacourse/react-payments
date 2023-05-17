import { useContext } from "react";
import { ERROR_MESSAGE } from "../constants/inputInfo";
import { DateContext } from "../contexts/cardInfo";

export function useCardDate() {
  const dateContext = useContext(DateContext);

  if (!dateContext) throw new Error(ERROR_MESSAGE.SCOPE);

  return dateContext;
}
