import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

import type { FormWrapperValue } from "./types";

export interface FormWrapperProps<T extends Record<string, unknown>>
  extends PropsWithChildren {
  defaultValues: T;
}

export const createFormContext = <T extends Record<string, unknown>>() => {
  const FormContext = createContext<FormWrapperValue<T> | null>(null);

  const FormWrapper = ({ defaultValues, children }: FormWrapperProps<T>) => {
    const [formState, setFormState] = useState<T>(() => defaultValues);

    const contextValue: FormWrapperValue<T> = {
      getValue: (key) => formState[key],
      setValue: (key, value) =>
        setFormState((prev) => ({ ...prev, [key]: value })),
    };

    return (
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    );
  };

  const useFormValue = (): FormWrapperValue<T> => {
    const context = useContext(FormContext);
    if (!context) {
      throw new Error(
        "useFormValue는 FormWrapper 내부에서만 사용할 수 있습니다.",
      );
    }
    return context;
  };

  return { FormWrapper, useFormValue };
};

