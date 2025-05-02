import { useEffect, useRef, useState, ChangeEvent } from 'react';

interface UseFocusGroupOptions {
  length: number;
  onComplete?: () => void;
}

interface UseFocusGroupResult {
  getRefCallback: (index: number) => (el: HTMLInputElement | null) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
}

export function useFocusGroup({
  length,
  onComplete,
}: UseFocusGroupOptions): UseFocusGroupResult {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [values, setValues] = useState<string[]>(Array(length).fill(''));

  const getRefCallback = (index: number) => (el: HTMLInputElement | null) => {
    if (el) inputRefs.current[index] = el;
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const maxLength = e.target.maxLength;

    setValues((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });

    if (value.length === maxLength) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  useEffect(() => {
    const allFilled = values.every((val, i) => {
      const input = inputRefs.current[i];
      return input && val.length === input.maxLength;
    });

    if (allFilled) {
      onComplete?.();
    }
  }, [values, onComplete]);

  return {
    getRefCallback,
    handleInput,
  };
}
