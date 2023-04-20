import { useState } from 'react';

type ValidateFunctions<Data> = Partial<{
  [K in keyof Data]: (value: Data[K]) => void;
}>;

type ValidationResult<Data> = Partial<Record<keyof Data, string | null>>;

export const useValidation = <Data extends object>(
  validationFunctions: ValidateFunctions<Data>,
) => {
  const [validationResult, setValidationResult] = useState<ValidationResult<Data>>({});

  const validate = (data: Data) => {
    const nextValidationResult: ValidationResult<Data> = (
      Object.keys(validationFunctions) as Array<keyof Data>
    ).reduce((result, key) => {
      // 각 필드마다 검증을 수행할 함수
      const validateFn = validationFunctions[key];

      try {
        validateFn?.(data[key]);
        return { ...result, [key]: null };
      } catch (e) {
        const error = e as Error;
        return { ...result, [key]: error.message };
      }
    }, {});

    setValidationResult(nextValidationResult);

    // 검증 성공 여부 반환: 객체 검증 성공 시 모든 필드의 값은 null
    return Object.values(nextValidationResult).every((result) => result === null);
  };

  return { validate, validationResult };
};
