import { useMemo } from "react";
import type { ValidationRule } from "../../types";
import { findFailedValidation, isValidValue } from "./utils";

export default function useInputGroupValidation({
  values,
  validations,
}: {
  values: string[];
  validations: ValidationRule[][];
}) {
  const validationErrors = useMemo(() => values.map((value, index) => {
    if (!value) return null;

    return findFailedValidation(validations[index] ?? [], value, "onChange")?.message ?? null;
  }), [validations, values]);

  const isValid = useMemo(() =>
    values.every((value, index) =>
      isValidValue(value, validations[index] ?? [])
    ), [validations, values]);

  return {
    validationErrors,
    isValid,
  };
}
