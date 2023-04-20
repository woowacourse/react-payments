import React, { createContext } from "react";
import { useInputDate } from "../hooks/useInputDate";
import { useInputName } from "../hooks/useInputName";
import { useInputNumber } from "../hooks/useInputNumber";

export const NumberContext = createContext({
  cardNumber: {
    first: "",
    second: "",
    third: "",
    fourth: "",
  },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const DataContext = createContext({
  month: "",
  year: "",
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const NameContext = createContext({
  userName: "",
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export function CardInfoProvider({ children }: { children: React.ReactNode }) {
  const numberInfo = useInputNumber();
  const dateInfo = useInputDate();
  const nameInfo = useInputName();

  return (
    <NumberContext.Provider value={numberInfo}>
      <DataContext.Provider value={dateInfo}>
        <NameContext.Provider value={nameInfo}>{children}</NameContext.Provider>
      </DataContext.Provider>
    </NumberContext.Provider>
  );
}
