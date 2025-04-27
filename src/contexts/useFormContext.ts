import { createContext, useContext } from 'react';
import { useFormState } from '../hooks/useFormState';

export type CardFormProps = ReturnType<typeof useFormState>;

export const FormContext = createContext<CardFormProps | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContext.Provider');
  }
  return context;
}
