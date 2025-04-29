import { useMemo } from "react";

function useFieldValidation(
  fields: string[],
  validator: (
    value: string,
    maxLength: number
  ) => { isValid: boolean; errorMessage?: string },
  maxLength: number
) {
  const validations = useMemo(() => {
    return fields.map((field) => validator(field, maxLength));
  }, [fields, validator, maxLength]);

  const errorMessage = useMemo(() => {
    return validations.find((v) => !v.isValid)?.errorMessage || "";
  }, [validations]);

  return {
    validations,
    errorMessage,
    isValid: !errorMessage,
  };
}

export default useFieldValidation;
