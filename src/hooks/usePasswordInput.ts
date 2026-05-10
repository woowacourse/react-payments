import { useState } from "react";
import { isNumeric } from "../utils/validators";

export function usePasswordInput() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (value: string) => {
    if (!isNumeric(value)) {
      setPasswordError("숫자를 입력해주세요.");
      return;
    }

    setPasswordError("");
    setPassword(value);
  };

  return { password, passwordError, handlePasswordChange };
}
