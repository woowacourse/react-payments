import { useState } from "react";

export function useCheckLength() {
  const [error, setError] = useState<boolean>(false);

  function checkInputLength(e: React.FocusEvent<HTMLInputElement>) {
    e.target.value.length < e.target.minLength
      ? setError(true)
      : setError(false);
  }

  return { error, checkInputLength };
}
