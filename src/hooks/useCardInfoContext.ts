import { useContext } from "react";
import {
  BankContext,
  DateContext,
  NameContext,
  NumberContext,
} from "../contexts/cardInfo";

export function useCardInfoContext() {
  const { cardNumber, changeNumberInput } = useContext(NumberContext);
  const { month, year, changeDateInput } = useContext(DateContext);
  const { userName, changeNameInput } = useContext(NameContext);
  const { selectedBank, selectBank } = useContext(BankContext);

  return {
    cardNumber,
    changeNumberInput,
    month,
    year,
    changeDateInput,
    userName,
    changeNameInput,
    selectedBank,
    selectBank,
  };
}
