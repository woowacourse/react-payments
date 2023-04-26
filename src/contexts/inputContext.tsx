import { createContext, ReactNode } from "react";

export const InputContext = createContext<{
  value: unknown;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>({
  value: null,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

interface InputProviderprops<T> {
  children: ReactNode;
  inputState: {
    value: T | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export function InputProvider<T>(props: InputProviderprops<T>) {
  const { children, inputState } = props;

  return (
    <InputContext.Provider value={inputState}>{children}</InputContext.Provider>
  );
}
