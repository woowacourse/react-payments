import { useState } from "react";

export function useError<T extends string>(errorState: Record<T, string>) {
  const [error, setError] = useState<Record<T, string>>(errorState);

  const setErrorMessage = (message: string, key: T) => {
    setError((prev) => ({ ...prev, [key]: message }));
  };

  return { error, setErrorMessage };
}
