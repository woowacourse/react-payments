import { useRef, useCallback } from "react";

export default function useFieldFocus(fieldSequence: string[] = []) {
  const refs = useRef<
    Record<string, HTMLInputElement | HTMLSelectElement | null>
  >({});

  const registerRef = useCallback(
    (id: string, element: HTMLInputElement | HTMLSelectElement | null) => {
      refs.current[id] = element;
    },
    []
  );

  const getNextFieldId = (currentFieldId: string): string | null => {
    const currentIndex = fieldSequence.indexOf(currentFieldId);
    if (currentIndex === -1 || currentIndex === fieldSequence.length - 1) {
      return null;
    }
    return fieldSequence[currentIndex + 1];
  };

  const handleInputChange = useCallback(
    (fieldId: string) => {
      const currentField = refs.current[fieldId];

      if (!fieldSequence.includes(fieldId)) return;

      if (
        currentField instanceof HTMLInputElement &&
        currentField.value.length >= currentField.maxLength
      ) {
        const nextFieldId = getNextFieldId(fieldId);
        if (nextFieldId) {
          const nextField = refs.current[nextFieldId];
          if (nextField) nextField.focus();
        }
      }
    },
    [fieldSequence]
  );

  return { registerRef, handleInputChange };
}
