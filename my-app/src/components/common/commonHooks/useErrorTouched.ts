import { useState } from 'react';

interface ErrorTouchedProps<T> {
  value: T;
  length: number;
  errorChecker: (currentValue: T) => boolean[];
  errorMessageGenerator: (currentValue: T) => string;
}

export const useErrorTouched = <T>({
  value,
  length,
  errorChecker,
  errorMessageGenerator,
}: ErrorTouchedProps<T>) => {
  const [touched, setTouched] = useState<boolean[]>(Array(length).fill(false));

  const currentErrors = errorChecker(value);
  const showErrors = currentErrors.map((isError, index) =>
    touched[index] ? isError : false,
  );

  const markingTouched = (index: number) => {
    setTouched((prev) => {
      const newTouched = [...prev];
      newTouched[index] = true;
      return newTouched;
    });
  };

  return {
    errors: showErrors,
    finalErrorMessage: showErrors.some((error) => error) ? errorMessageGenerator(value) : "",
    markingTouched,
  };
};
