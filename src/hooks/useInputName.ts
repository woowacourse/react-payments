import { useState } from "react";
import { validation } from "../validation/input";

export function useInputName() {
  const [userName, setUserName] = useState<string>("");

  function changeNameInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value && !validation.isString(e.target.value)) {
      e.target.value = userName;
    } else {
      setUserName(e.target.value);
    }
  }

  return { userName, changeNameInput };
}
