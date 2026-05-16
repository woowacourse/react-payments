import { useCallback, useMemo, type ChangeEvent, type FocusEvent } from "react";
import type { ValidationRule } from "../../types";
import useInputGroupElements from "./useInputGroupElements";
import useInputGroupSelection from "./useInputGroupSelection";
import { useResizableStates, useStates } from "./useInputGroupState";
import useInputGroupValidation from "./useInputGroupValidation";
import { findChangeBlockingValidation, findFailedValidation, getDisplayError } from "./utils";

export default function useInputGroup<E extends HTMLInputElement | HTMLSelectElement = HTMLInputElement>(
  initialValue: string[],
  options?: {
    validation?: (values: string[]) => ValidationRule[][],
    resolver?: (value: string[]) => string[]
  }
) {
  const validation = options?.validation;
  const resolver = options?.resolver;

  const {
    states: values,
    setStateAt: setValueAt,
    setStates: setValues
  } = useStates(initialValue)

  const {
    states: storedErrors,
    setStateAt: setStoredErrorAt,
    resizeStates: resizeStoredErrors,
  } = useResizableStates<string | null>(() => initialValue.map(() => null));

  const {
    states: isToucheds,
    setStateAt: setIsTouchedAt
  } = useResizableStates<boolean>(() => initialValue.map(() => false));

  const { refs, resizeRefs, focusAt } = useInputGroupElements<E>(initialValue.length);
  const saveSelection = useInputGroupSelection(refs);

  const currentValidations = useMemo(
    () => validation?.(values) ?? [],
    [validation, values]
  );

  const {
    validationErrors,
    isValid,
  } = useInputGroupValidation({
    values,
    validations: currentValidations,
  });

  const errors = useMemo(() => values.map((value, index) => {
    return getDisplayError(value, validationErrors[index], storedErrors[index]);
  }), [storedErrors, validationErrors, values]);

  const error = useMemo(() => {
    return errors.find(err => err);
  }, [errors]);

  const isTouched = useMemo(() => isToucheds.some(Boolean), [isToucheds]);

  const register = useCallback(({ index }: { index: number }) => {
    return {
      ref: refs[index],
      onChange: (e: ChangeEvent<E>) => {
        const fieldValidations = currentValidations[index] ?? [];
        const failedValidation = findChangeBlockingValidation(fieldValidations, e.target.value, values[index]);

        if (failedValidation) {
          setStoredErrorAt(index, failedValidation.message);
          return;
        }

        if (resolver) {
          const updatedValues = values.map((value, valueIndex) => (valueIndex === index ? e.target.value as string : value));
          const resolvedValues = resolver(updatedValues);

          setValues(resolvedValues as string[]);
          resizeStoredErrors(resolvedValues.length, null);
          resizeRefs(resolvedValues.length);

          if (fieldValidations.every(v => v.validator(e.target.value))) {
            const nextIndex = index + 1;
            if (nextIndex < resolvedValues.length) {
              focusAt(nextIndex);
              return;
            }
          }
          if (e.target instanceof HTMLInputElement) {
            saveSelection(index, e.target);
          }
          return;
        }

        setValueAt(index, e.target.value as string);
        setStoredErrorAt(index, null);

        if (fieldValidations.every(validation => validation.validator(e.target.value))) {
          focusAt(index + 1);
        }
      },
      onBlur: (e: FocusEvent<E>) => {
        if (!isToucheds[index]) setIsTouchedAt(index, true);
        const failedValidation = findFailedValidation(currentValidations[index] ?? [], e.target.value, "onBlur");
        setStoredErrorAt(index, failedValidation ? failedValidation.message : null);
      }
    }
  }, [refs, currentValidations, values, resolver, setValueAt, setStoredErrorAt, setValues, resizeStoredErrors, resizeRefs, focusAt, saveSelection, isToucheds, setIsTouchedAt])

  return {
    values,
    errors,
    error,
    isValid,
    isToucheds,
    isTouched,
    register
  };
}
