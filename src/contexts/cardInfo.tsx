import React, { createContext } from "react";
import { useInputDate } from "../hooks/useInputDate";
import { useInputName } from "../hooks/useInputName";
import { useInputNumber } from "../hooks/useInputNumber";
import { useSelect } from "../hooks/useSelect";
import { CardNumberIndex } from "../type/input";

export const NumberContext = createContext<{
  cardNumber: CardNumberIndex;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>({
  cardNumber: {
    first: "",
    second: "",
    third: "",
    fourth: "",
  },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const DateContext = createContext<{
  month: string;
  year: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>({
  month: "",
  year: "",
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const NameContext = createContext<{
  userName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>({
  userName: "",
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const BankContext = createContext<{
  selectedItem: number;
  selectItem: (e: React.MouseEvent<HTMLElement>) => void;
}>({
  selectedItem: -1,
  selectItem: (e: React.MouseEvent<HTMLElement>) => {},
});

export function CardInfoProvider({ children }: { children: React.ReactNode }) {
  const numberInfo = useInputNumber();
  const dateInfo = useInputDate();
  const nameInfo = useInputName();
  const bankInfo = useSelect();

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
