import { useCallback, useState } from "react";

export function useFieldErrors(keys: string[]) {
  const [inputErrors, setInputErrors] = useState<Record<string, string | null>>(
    Object.fromEntries(keys.map((key) => [key, null])),
  );

  const setError = useCallback(
    (key: string) => (message: string | null) => {
      setInputErrors((prev) => ({ ...prev, [key]: message }));
    },
    [],
  );

  const errorMessage: string | null =
    Object.values(inputErrors).find((err) => err !== null) ?? null;

  return { inputErrors, setError, errorMessage };
}
