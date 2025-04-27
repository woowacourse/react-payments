import { useMemo, useState } from 'react';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';
import { InputFieldType } from '../config/inputField';

interface useInputErrorProps<T extends InputFieldType> {
  inputValue: Record<T, string>;
  completeCondition: number;
}

export function useInputError<T extends InputFieldType>({
  inputValue,
  completeCondition,
}: useInputErrorProps<T>) {
  const [errorTypes, setErrorTypes] = useState<Record<T, ErrorType[]>>(
    (Object.keys(inputValue) as T[]).reduce(
      (acc, key) => {
        acc[key] = [];
        return acc;
      },
      {} as Record<T, ErrorType[]>
    )
  );

  const errorMessage = useMemo(() => {
    const currentErrorStatus = (
      Object.values(errorTypes) as ErrorType[][]
    ).find((arr) => arr.length > 0);

    const currentErrorType = currentErrorStatus?.[0];

    return currentErrorType ? ERROR_TYPE_TO_MESSAGE[currentErrorType] : '';
  }, [errorTypes]);

  const isComplete = useMemo(() => {
    return !Boolean(
      (Object.values(inputValue) as string[]).filter(
        (value) => value.length !== completeCondition
      ).length
    );
  }, [inputValue, completeCondition]);

  const validateInputError = (
    inputName: T,
    { errorType, isError }: { errorType: ErrorType; isError: boolean }
  ) => {
    setErrorTypes((prevValue) => {
      const currentErrorType = errorTypes[inputName];

      if (isError) {
        const set = new Set(currentErrorType).add(errorType);
        return {
          ...prevValue,
          [inputName]: Array.from(set),
        };
      } else {
        return {
          ...prevValue,
          [inputName]: currentErrorType.filter(
            (errorType) => errorType !== errorType
          ),
        };
      }
    });
  };

  return { errorTypes, errorMessage, isComplete, validateInputError };
}
