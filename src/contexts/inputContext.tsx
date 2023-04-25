import { createContext, ReactNode, useState } from "react";

export const InputContext = createContext<any>(null);

interface InputProviderprops {
  children: ReactNode;
  inputState: any;
}

export function InputProvider(props: InputProviderprops) {
  const { children, inputState } = props;

  return (
    <InputContext.Provider value={inputState}>{children}</InputContext.Provider>
  );
}
