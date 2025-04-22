import { useState } from "react";
import { isValidLength } from "../validation/validate";

const CONSTANT_USE_CARD_PASSWORD = {
  IS_VALID_LENGTH_ERROR: "카드 비밀번호는 2자리 숫자여야 합니다.",
  CARD_PASSWORD_MAX_LENGTH: 2,
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
    if (
      !isValidLength(
        value.length,
        CONSTANT_USE_CARD_PASSWORD.CARD_PASSWORD_MAX_LENGTH
      )
    ) {
      setError(CONSTANT_USE_CARD_PASSWORD.IS_VALID_LENGTH_ERROR);
      return;
    }

    setPassword(
      value.slice(0, CONSTANT_USE_CARD_PASSWORD.CARD_PASSWORD_MAX_LENGTH)
    );
    setError("");
  };

  return { password, passwordError, passwordValidate };
}
