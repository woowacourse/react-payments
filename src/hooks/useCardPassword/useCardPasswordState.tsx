import { useState } from "react";
import { isValidLength } from "../../validation/validate";

const USE_CARD_PASSWORD = {
  IMVALID_LENGTH_ERROR: "카드 비밀번호는 2자리 숫자여야 합니다.",
  MAX_LENGTH: 2,
} as const;

interface UseCardPasswordReturn {
  password: string;
  passwordError: string;
  passwordValidate: (value: string) => void;
}

export default function useCardPassword(): UseCardPasswordReturn {
  const [password, setPassword] = useState("");
  const [passwordError, setError] = useState("");

  const passwordValidate = (value: string) => {
    if (!isValidLength(value.length, USE_CARD_PASSWORD.MAX_LENGTH)) {
      setError(USE_CARD_PASSWORD.IMVALID_LENGTH_ERROR);
      return;
    }

    setPassword(value.slice(0, USE_CARD_PASSWORD.MAX_LENGTH));
    setError("");
  };

  return { password, passwordError, passwordValidate };
}
