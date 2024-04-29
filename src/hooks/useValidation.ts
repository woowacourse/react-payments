import { useEffect } from "react";
import useInput from "./useInput";

export interface Validator {
  validate: (input: string) => boolean;
  errorMessage: string;
  index?: number[];
}

const useValidation = (state: ReturnType<typeof useInput>, validators: Validator[]) => {
  const { value, setError, resetError } = state;

  useEffect(() => {
    const isValid = validators.every(({ validate }) => validate(value));
    if (isValid) {
      resetError();
      return;
    }

    validators.forEach(({ validate, errorMessage }) => {
      if (!validate(value)) {
        setError(errorMessage);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, validators]);

  return state;
};
export default useValidation;
