import React, { createContext, useRef } from "react";
import { useInputDate } from "../hooks/useInputDate";
import { useInputName } from "../hooks/useInputName";
import { useInputNumber } from "../hooks/useInputNumber";
import { CardNumberIndex } from "../type/input";
import { Ref } from "../type/ref";

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

export const RefContext = createContext<React.MutableRefObject<Ref>>({
  current: {},
});

export function CardInfoProvider({ children }: { children: React.ReactNode }) {
  const numberInfo = useInputNumber();
  const dateInfo = useInputDate();
  const nameInfo = useInputName();
  const inputRef = useRef<React.MutableRefObject<Ref>>({ current: {} });

  return (
    <RefContext.Provider value={inputRef.current}>
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
