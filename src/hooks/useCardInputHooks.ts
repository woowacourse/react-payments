import { ChangeEvent } from 'react';
import { UseInputFieldParams, UseInputFieldReturn } from '../types/models';
import { useInputFieldArray } from './useInputFieldArray';

export function useInputField({
  initialValue,
  placeholder,
  maximumLength,
  validationFunction,
}: UseInputFieldParams): UseInputFieldReturn {
  const [fields, handleChange, [ref], resetArray] = useInputFieldArray({
    initialValues: [initialValue],
    placeholders: [placeholder],
    maximumLength,
    validationFunction: (v) => validationFunction(v),
  });

  const handleSingleChange = (e: ChangeEvent<HTMLInputElement>) =>
    handleChange(e, 0);

  const reset = () => resetArray();

  return [fields[0], handleSingleChange, ref, reset];
}

export type UseMultipleInputFieldsReturn = ReturnType<
  typeof useInputFieldArray
>;

export const useMultipleInputFields = useInputFieldArray;
