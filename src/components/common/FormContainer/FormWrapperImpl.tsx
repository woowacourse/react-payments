import { useState, type PropsWithChildren } from "react";

import FormWrapperContext from "./FormWrapperContext";
import type { FormWrapperValue } from "./types";

interface FormWrapperImplProps<
  T extends Record<string, unknown>,
> extends PropsWithChildren {
  defaultValues: T;
}
const FormWrapperImpl = <T extends Record<string, unknown>>({
  defaultValues,
  children,
}: FormWrapperImplProps<T>) => {
  const [formState, setFormState] = useState<T>(defaultValues);

  const contextValue: FormWrapperValue<T> = {
    getValue: (key) => formState[key],
    setValue: (key, value) => {
      setFormState((prev) => ({ ...prev, [key]: value }));
    },
  };

  return (
    <FormWrapperContext.Provider
      value={contextValue as FormWrapperValue<Record<string, unknown>>}
    >
      {children}
    </FormWrapperContext.Provider>
  );
};

export default FormWrapperImpl;
