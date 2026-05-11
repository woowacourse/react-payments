import { useState, type PropsWithChildren } from "react";
import FormWrapperImpl from "./FormWrapperImpl";

interface UseFormWrapperProps<T extends Record<string, unknown>> {
  defaultValues: T;
}

const useFormWrapper = <T extends Record<string, unknown>>({
  defaultValues,
}: UseFormWrapperProps<T>) => {
  const [FormWrapper] = useState(() => {
    const initialValues = defaultValues;

    return ({ children }: PropsWithChildren) => (
      <FormWrapperImpl defaultValues={initialValues}>
        {children}
      </FormWrapperImpl>
    );
  });

  return { FormWrapper };
};
export default useFormWrapper;
