import { useState } from "react";

export function useInputCode() {
  const [code, setCode] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCode(e.target.value);
  }

  return { code, handleChange };
}
