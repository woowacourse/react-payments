import React, { createContext, useMemo, useState } from 'react';
import useFormSchema from '../hooks/useFormSchema';
import initialCardSchema from '../schema/cardSchema';
import { CardValues } from '../types/type';

interface CardContextProviderProps {
  children: React.ReactNode;
}

interface CardContextState {
  values: unknown;
  setValues: React.Dispatch<React.SetStateAction<CardValues>>;
  initialField: unknown;
}

export const CardContext = createContext<CardContextState | undefined>(
  undefined
);

export const CardContextProvider = ({ children }: CardContextProviderProps) => {
  const { initialField } = useFormSchema(initialCardSchema);
  const [values, setValues] = useState(initialField);
  const cardValues = useMemo(
    () => ({ values, setValues, initialField }),
    [values, initialField]
  );

  return (
    <CardContext.Provider value={cardValues}>{children}</CardContext.Provider>
  );
};
