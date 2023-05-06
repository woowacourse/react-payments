import { ChangeEvent, createContext, ReactNode, useState } from "react";

export const InputContext = createContext<{
  value: unknown;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>({
  value: null,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
});

interface InputProviderprops<T> {
  children: ReactNode;
  inputState?: {
    value: T | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export function InputProvider<T>(props: InputProviderprops<T>) {
  const { children, inputState } = props;
  const [value, setValue] = useState(inputState?.value ?? "");

  function handleInputValue(e: ChangeEvent<HTMLInputElement>) {
    inputState?.handleChange(e);
    setValue(e.target.value);
  }

  return (
    <InputContext.Provider
      value={{ value: value, handleChange: handleInputValue }}>
      {children}
    </InputContext.Provider>
  );
}
