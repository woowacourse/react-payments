import React, { createContext, useRef } from "react";
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

export const DateContext = createContext({
  month: "",
  year: "",
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const NameContext = createContext({
  userName: "",
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const RefContext = createContext<any>({});

export function CardInfoProvider({ children }: { children: React.ReactNode }) {
  const numberInfo = useInputNumber();
  const dateInfo = useInputDate();
  const nameInfo = useInputName();
  const inputRef = useRef<any>({});

  return (
    <RefContext.Provider value={inputRef}>
      <NumberContext.Provider value={numberInfo}>
        <DateContext.Provider value={dateInfo}>
          <NameContext.Provider value={nameInfo}>
            {children}
          </NameContext.Provider>
        </DateContext.Provider>
      </NumberContext.Provider>
    </RefContext.Provider>
  );
}
