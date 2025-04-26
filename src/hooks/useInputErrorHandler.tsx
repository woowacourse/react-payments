import { useState } from 'react';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';
import { InputFieldType } from '../config/inputField';

export function useInputErrorHandler<T extends InputFieldType>(
  inputValue: Record<T, string>,
  completeCondition: number
) {
  const [errorTypes, setErrorTypes] = useState<Record<T, ErrorType[]>>(
    (Object.keys(inputValue) as T[]).reduce(
      (acc, key) => {
        acc[key] = [];
        return acc;
      },
      {} as Record<T, ErrorType[]>
    )
  );

  const errorStatus =
    (Object.values(errorTypes) as ErrorType[][]).find(
      (arr) => arr.length > 0
    ) ?? [];

  const errorMessage =
    errorStatus && errorStatus?.length !== 0
      ? ERROR_TYPE_TO_MESSAGE[errorStatus[0]]
      : '';

  const isComplete = !Boolean(
    (Object.values(inputValue) as string[]).filter(
      (value) => value.length !== completeCondition
    ).length
  );

  const validateInputError = (
    inputName: T,
    errorStatus: { errorType: ErrorType; isError: boolean }
  ) => {
    const currentErrorType = errorTypes[inputName];

    if (errorStatus.isError) {
      const set = new Set(currentErrorType);
      set.add(errorStatus.errorType);
      setErrorTypes((prevValue) => ({
        ...prevValue,
        [inputName]: Array.from(set),
      }));
    } else {
      setErrorTypes((prevValue) => ({
        ...prevValue,
        [inputName]: currentErrorType.filter(
          (errorType) => errorType !== errorStatus.errorType
        ),
      }));
    }
  };

  return { errorTypes, errorMessage, isComplete, validateInputError };
}
