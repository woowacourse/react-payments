import { useState } from "react";

export function useInputName() {
  const [userName, setUserName] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
  }

  return { userName, handleChange };
}
