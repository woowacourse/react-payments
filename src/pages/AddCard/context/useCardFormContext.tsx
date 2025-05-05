import { createContext, PropsWithChildren, useContext } from 'react';
import { AddCardFormProps } from '../types';
import { useControlledAddCardState } from '../hooks/useControlledAddCardState';

export const AddCardFormContext = createContext<AddCardFormProps | null>(null);

export const useCardFormContext = () => {
  const context = useContext(AddCardFormContext);
  if (!context) throw new Error('AddCardContext must be used within AddCardProvider');
  return context;
};

export const AddCardFormProvider = ({ children }: PropsWithChildren) => {
  const addFormState = useControlledAddCardState();

  return <AddCardFormContext.Provider value={addFormState}>{children}</AddCardFormContext.Provider>;
};
