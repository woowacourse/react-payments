import { useEffect, useMemo } from 'react';
import {
  FieldName,
  INPUT_FIELD_MAX_LENGTH,
  InputFieldType,
} from '../config/inputField';

interface useFieldCompletionProps<T extends InputFieldType> {
  errorMessage?: string;
  fieldName: FieldName;
  inputValue: Record<T, string>;
  onComplete: (params: { isComplete: boolean; fieldName: FieldName }) => void;
}

export function useFieldCompletion<T extends InputFieldType>({
  errorMessage,
  fieldName,
  inputValue,
  onComplete,
}: useFieldCompletionProps<T>) {
  const maxLength = INPUT_FIELD_MAX_LENGTH[fieldName];

  const isComplete = useMemo(() => {
    return !Boolean(
      (Object.values(inputValue) as string[]).filter(
        (value) => value.length !== maxLength
      ).length
    );
  }, [inputValue]);

  useEffect(() => {
    onComplete({
      isComplete: isComplete && !Boolean(errorMessage),
      fieldName,
    });
  }, [isComplete, errorMessage]);
}
