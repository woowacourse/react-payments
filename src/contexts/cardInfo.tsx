import React, { createContext } from "react";
import { useInputDate } from "../hooks/useInputDate";
import { useInputName } from "../hooks/useInputName";
import { useInputNumber } from "../hooks/useInputNumber";
import { useSelectId } from "../hooks/useSelectId";
import { BankItem } from "../type/card";
import { CardNumberIndex } from "../type/input";

export const NumberContext = createContext<{
  cardNumber: CardNumberIndex;
  changeNumberInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>({
  cardNumber: {
    first: "",
    second: "",
    third: "",
    fourth: "",
  },
  changeNumberInput: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const DateContext = createContext<{
  month: string;
  year: string;
  changeDateInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>({
  month: "",
  year: "",
  changeDateInput: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const NameContext = createContext<{
  userName: string;
  changeNameInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>({
  userName: "",
  changeNameInput: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const BankContext = createContext<{
  selectedBank: BankItem;
  selectBank: (item: BankItem) => void;
}>({
  selectedBank: {
    id: 0,
    logo: () => <></>,
    logoName: "",
    color: "#000000",
    font: "",
  },
  selectBank: (item: BankItem) => {},
});

export function CardInfoProvider({ children }: { children: React.ReactNode }) {
  const numberInfo = useInputNumber();
  const dateInfo = useInputDate();
  const nameInfo = useInputName();
  const bankInfo = useSelectId();

  return (
    <NumberContext.Provider value={numberInfo}>
      <DateContext.Provider value={dateInfo}>
        <NameContext.Provider value={nameInfo}>
          <BankContext.Provider value={bankInfo}>
            {children}
          </BankContext.Provider>
        </NameContext.Provider>
      </DateContext.Provider>
    </NumberContext.Provider>
  );
}
