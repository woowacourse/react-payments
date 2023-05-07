import { useContext } from "react";
import { ERROR_MESSAGE } from "../constants/inputInfo";
import { BankContext } from "../contexts/cardInfo";

export function useCardBank() {
  const bankContext = useContext(BankContext);

  if (!bankContext) throw new Error(ERROR_MESSAGE.SCOPE);

  return bankContext;
}
