import type { ValidationRule } from "../types";
import useInputGroup from "./useInputGroup";

export default function useInput<E extends HTMLInputElement | HTMLSelectElement = HTMLInputElement>(
  initialValue: string,
  options?: {
    validation?: (value: string) => ValidationRule[],
    resolver?: (value: string) => string,
  }
) {
  const field = useInputGroup<E>([initialValue], {
    validation: values => [options?.validation?.(values[0]) ?? []],
    resolver: options?.resolver
      ? values => [options.resolver!(values[0])]
      : undefined,
  });

  return {
    value: field.values[0],
    error: field.errors[0],
    isValid: field.isValid,
    isTouched: field.isToucheds[0],
    register: () => field.register({ index: 0 })
  };
}
