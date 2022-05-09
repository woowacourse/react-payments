import React, { createContext, useMemo, useState } from 'react';
import useFormSchema from '../hooks/useFormSchema';
import initialCardSchema from '../schema/cardSchema';

export const CardContext = createContext();

export const CardContextProvider = ({ children }) => {
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
