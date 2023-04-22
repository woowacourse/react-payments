import { useState } from 'react';
import type { ERROR_MESSAGE } from '../constants/validation';
import { SUCCESS_MESSAGE } from '../constants/validation';

type ValidateFunctions<Data> = Partial<{
  [K in keyof Data]: (value: Data[K]) => void;
}>;

type ErrorMessage = (typeof ERROR_MESSAGE)[keyof typeof ERROR_MESSAGE];

type SuccessMessage = typeof SUCCESS_MESSAGE;

type isValidateMessage = ErrorMessage | SuccessMessage;

type ValidationResult<Data> = Partial<Record<keyof Data, isValidateMessage>>;

export const useValidation = <Data extends object>(
  validationFunctions: ValidateFunctions<Data>,
) => {
  const [validationResult, setValidationResult] = useState<ValidationResult<Data>>({});

  const validate = (data: Data) => {
    const nextValidationResult: ValidationResult<Data> = (
      Object.keys(validationFunctions) as Array<keyof Data>
    ).reduce((result, key) => {
      // 각 필드마다 검증을 수행할 함수
      const validateFunction = validationFunctions[key];

      try {
        validateFunction?.(data[key]);
        return { ...result, [key]: SUCCESS_MESSAGE };
      } catch (e) {
        const error = e as Error;
        return { ...result, [key]: error.message as ErrorMessage };
      }
    }, {});

    setValidationResult(nextValidationResult);

    return Object.values(nextValidationResult).every((result) => result === SUCCESS_MESSAGE);
  };

  return { validate, validationResult };
};
