import type { ValidationRule } from "../../types";

export interface SelectionRange {
  start: number;
  end: number;
}

export function findFailedValidation(validations: ValidationRule[], value: string, type: ValidationRule["type"]) {
  return validations.find(
    validation => validation.type === type && !validation.validator(value)
  );
}

export function findChangeBlockingValidation(validations: ValidationRule[], nextValue: string, previousValue: string | null) {
  return validations.find(
    validation =>
      nextValue.length &&
      !previousValue?.startsWith(nextValue) &&
      validation.type === "onChange" &&
      !validation.validator(nextValue)
  );
}

export function getDisplayError(value: string | null, validationError: string | null, storedError: string | null) {
  if (!value) return storedError;

  return validationError ?? storedError;
}

export function isValidValue(value: string | null, validations: ValidationRule[]) {
  return !!value && validations.every(rule => rule.validator(value));
}

export function getSelectionRange(target: HTMLInputElement): SelectionRange {
  return {
    start: target.selectionStart ?? target.value.length,
    end: target.selectionEnd ?? target.value.length,
  };
}
