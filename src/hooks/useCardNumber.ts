import { useContext } from "react";
import { ERROR_MESSAGE } from "../constants/inputInfo";
import { NumberContext } from "../contexts/cardInfo";

export function useCardNumber() {
  const cardNumberContext = useContext(NumberContext);

  if (!cardNumberContext) throw new Error(ERROR_MESSAGE.SCOPE);

  return cardNumberContext;
}
