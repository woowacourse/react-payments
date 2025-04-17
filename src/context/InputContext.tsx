import { createContext, useContext, useId, ReactNode } from 'react';

export interface InputContextType {
  id: string;
}

const defaultContextValue: InputContextType = {
  id: '',
};

export const InputContext =
  createContext<InputContextType>(defaultContextValue);

export const useInputContext = () => useContext(InputContext);

export interface InputGroupProps {
  id?: string;
  children: ReactNode;
}

export const InputGroup = ({id: providedId, children}: InputGroupProps) => {
  const generatedId = useId();
  const id = providedId || generatedId;

  return (
    <InputContext.Provider value={{id}}>{children}</InputContext.Provider>
  );
};
