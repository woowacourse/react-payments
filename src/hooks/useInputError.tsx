import { useMemo, useState } from 'react';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';
import { InputFieldType } from '../config/inputField';

interface useInputErrorProps<T extends InputFieldType> {
  inputValue: Record<T, string>;
}

export function useInputError<T extends InputFieldType>({
  inputValue,
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

  const validateInputError = (
    inputName: T,
    { errorType, isError }: { errorType: ErrorType; isError: boolean }
  ) => {
    setErrorTypes((prevValue) => {
      const currentErrorType = errorTypes[inputName];
      const set = new Set(currentErrorType).add(errorType);

      const newArray = isError
        ? Array.from(set)
        : currentErrorType.filter(
            (currErrorType) => currErrorType !== errorType
          );

      return {
        ...prevValue,
        [inputName]: newArray,
      };
    });
  };

  return { errorTypes, errorMessage, validateInputError };
}
