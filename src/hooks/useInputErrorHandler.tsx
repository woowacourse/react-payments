import { useState } from 'react';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';
import {
  CardNumberInputType,
  CVCInputValueType,
  ExpirationDateInputType,
  PasswordInputType,
} from '../config/inputField';

export const useInputErrorHandler = <
  T extends
    | CardNumberInputType
    | CVCInputValueType
    | ExpirationDateInputType
    | PasswordInputType,
>(
  initialKeys: T[],
  inputValue: Record<T, string>,
  completeCondition: number
) => {
  const [errorTypes, setErrorTypes] = useState<Record<T, ErrorType[]>>(
    initialKeys.reduce(
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
      (cardNumberValue) => cardNumberValue.length !== completeCondition
    ).length
  );

  return { errorTypes, setErrorTypes, errorMessage, isComplete };
};
