import React from 'react';
import { UseFormReturn, FormProviderProps } from './types';

const FormContext = React.createContext<UseFormReturn | null>(null);
FormContext.displayName = 'HookFormContext';

export const useFormContext = (): UseFormReturn => React.useContext(FormContext) as unknown as UseFormReturn;

export function FormProvider(props: FormProviderProps) {
  const { children, ...data } = props;
  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
}
