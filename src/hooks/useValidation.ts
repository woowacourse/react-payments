import { useState } from 'react';

type Validation<Data extends object> = Partial<{
  [Field in keyof Data]: (value: Data[Field]) => void;
}>;

type ValidationResult<Data extends object> = Partial<Record<keyof Data, string>>;

export const useValidation = <Data extends object>(validateFns: Validation<Data>) => {
  const [validationResult, setValidationResult] = useState<ValidationResult<Data>>({});

  /**
   * 주어진 데이터에 대해 검증을 수행합니다.
   *
   * 검증 결과는 {@link validationResult} 상태에 업데이트됩니다.
   *
   * @param data 검증할 데이터 객체
   * @returns {boolean} 검증 성공 여부
   */
  const validate = (data: Data) => {
    const nextValidationResult = (Object.keys(validateFns) as Array<keyof Data>).reduce(
      (progressValidationResult, field) => {
        // 각 필드마다 검증을 수행할 함수
        const validateFn = validateFns[field];

        try {
          validateFn?.(data[field]);
          return progressValidationResult;
        } catch (e) {
          const error = e as Error;
          return { ...progressValidationResult, [field]: error.message };
        }
      },
      {},
    );

    setValidationResult(nextValidationResult);

    // 검증 성공 여부 반환
    return Object.keys(nextValidationResult).length === 0;
  };

  const validateField = <Field extends keyof Data>(field: Field, value: Data[Field]) => {
    const validateFn = validateFns[field];

    try {
      validateFn?.(value);

      // validate 성공했으므로 validationResult에서 삭제
      setValidationResult(
        Object.fromEntries(
          Object.entries(validationResult).filter(([itField]) => itField !== field),
        ) as ValidationResult<Data>,
      );
      return true;
    } catch (e) {
      const error = e as Error;
      setValidationResult({ ...validationResult, [field]: error.message });
    }
    return false;
  };

  return { validate, validateField, validationResult };
};
