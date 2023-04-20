import { useState } from "react";

export function useError() {
  const [error, setError] = useState<string | null>(null);

  function handleError(input: any, validator: (input: string) => void) {
    try {
      validator(input);
      setError("");
    } catch (e) {
      console.error(e);
      const error = e as Error;
      setError(error.message);
    }
  }

  return { error, handleError };
}
