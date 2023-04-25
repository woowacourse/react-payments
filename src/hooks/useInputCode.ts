import { useState } from "react";
import { validation } from "../validation/input";

export function useInputCode() {
  const [code, setCode] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!validation.isNumber(e.target.value)) {
      e.target.value = code;
    } else {
      setCode(e.target.value);
    }
  }

  return { code, handleChange };
}
