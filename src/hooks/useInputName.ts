import { useState } from "react";
import { validation } from "../validation/input";

export function useInputName() {
  const [userName, setUserName] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!validation.isString(e.target.value)) {
      e.target.value = userName;
    } else {
      setUserName(e.target.value);
    }
  }

  return { userName, handleChange };
}
