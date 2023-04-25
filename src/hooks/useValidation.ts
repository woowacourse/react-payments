import { useState } from 'react';

export type Validation<Data extends object> = Partial<{
  [K in keyof Data]: (value: Data[K]) => void;
}>;

type ValidationResult<Data extends object> = Record<keyof Data, string | null>;

export const useValidation = <Data extends object>(validateFns: NonNullable<Validation<Data>>) => {
  const [validationResult, setValidationResult] = useState<ValidationResult<Data>>(
    Object.fromEntries(
      Object.keys(validateFns).map((key) => [key, null]),
    ) as ValidationResult<Data>,
  );

  /**
   * 주어진 데이터에 대해 검증을 수행합니다.
   *
   * 검증 결과는 {@link validationResult} 상태에 업데이트됩니다.
   *
   * @param data 검증할 데이터 객체
   * @returns {boolean} 검증 성공 여부
   */
  const validate = (data: Data) => {
    const allValid = (Object.keys(validateFns) as Array<keyof Data>).reduce((valid, key) => {
      // 각 필드마다 검증을 수행할 함수
      const validateFn = validateFns[key];

      try {
        validateFn?.(data[key]);
        setValidationResult({ ...validationResult, [key]: null });
        return valid;
      } catch (e) {
        const error = e as Error;
        setValidationResult({ ...validationResult, [key]: error.message });
      }
      return false;
    }, true);

    // 검증 성공 여부 반환
    return allValid;
  };

  return { validate, validationResult };
};
