import { useState } from 'react';

type ValidateFunctions<Data> = Partial<{
  [K in keyof Data]: (value: Data[K]) => void;
}>;

type FieldValidationResult =
  | {
      success: true;
      errorMessage: null;
    }
  | {
      success: false;
      errorMessage: string;
    };

type ValidationResult<Data> = Partial<Record<keyof Data, FieldValidationResult>>;

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
        return { ...result, [key]: { success: true, errorMessage: null } };
      } catch (e) {
        const error = e as Error;
        return { ...result, [key]: { success: false, errorMessage: error.message } };
      }
    }, {});

    setValidationResult(nextValidationResult);

    return Object.values(nextValidationResult).every(
      (result) => (result as FieldValidationResult).success,
    );
  };

  return { validate, validationResult };
};
