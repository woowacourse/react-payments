import { useEffect, useMemo, useState } from 'react';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';
import {
  FieldName,
  INPUT_FIELD_MAX_LENGTH,
  InputFieldType,
} from '../config/inputField';

interface useInputErrorProps<T extends InputFieldType> {
  inputValue: Record<T, string>;
  fieldName: FieldName;
  onComplete: (params: { isComplete: boolean; fieldName: FieldName }) => void;
}

export function useFieldValidation<T extends InputFieldType>({
  inputValue,
  fieldName,
  onComplete,
}: useInputErrorProps<T>) {
  const maxLength = INPUT_FIELD_MAX_LENGTH[fieldName];

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
        (value) => value.length !== maxLength
      ).length
    );
  }, [inputValue]);

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

  useEffect(() => {
    onComplete({
      isComplete: isComplete && !Boolean(errorMessage),
      fieldName,
    });
  }, [isComplete, errorMessage]);

  return { errorTypes, errorMessage, validateInputError };
}
