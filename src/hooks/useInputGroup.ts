import { useCallback, useRef, useState } from "react";

export function useInputGroup<T extends string>(keys: T[]) {
  const [inputErrors, setInputErrors] = useState<Record<T, string | null>>(
    Object.fromEntries(keys.map((key) => [key, null])) as Record<
      T,
      string | null
    >,
  );
  const setError = useCallback(
    (key: T) => (message: string | null) => {
      setInputErrors((prev) => ({ ...prev, [key]: message }));
    },
    [],
  );

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const errorMessage: string | null =
    (Object.values(inputErrors) as (string | null)[]).find(
      (err) => err !== null,
    ) ?? null;

  return { inputErrors, setError, inputRefs, errorMessage };
}
