import { useEffect } from 'react';
import { FieldName } from '../config/inputField';

interface useFieldCompletionProps {
  isComplete: boolean;
  errorMessage?: string;
  fieldName: FieldName;
  onComplete: (params: { isComplete: boolean; fieldName: FieldName }) => void;
}

export function useFieldCompletion({
  isComplete,
  errorMessage,
  fieldName,
  onComplete,
}: useFieldCompletionProps) {
  useEffect(() => {
    if (!onComplete) return;

    onComplete?.({
      isComplete: isComplete && !Boolean(errorMessage),
      fieldName,
    });
  }, [isComplete, errorMessage]);
}
