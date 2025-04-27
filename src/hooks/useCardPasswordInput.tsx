import { useState } from "react";
import { isNumber, isUnderMaxLength } from "../validation/validate";

const PASSWORD_LIMIT = {
  MAX_LENGTH: 2,
} as const;

export default function useCardPasswordInput() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (value: string) => {
    if (!isUnderMaxLength(value.length, PASSWORD_LIMIT.MAX_LENGTH)) {
      setPasswordError("비밀번호 앞 2자리만 입력해주세요.");
      return false;
    }

    if (!isNumber(value)) {
      setPasswordError("숫자만 입력 가능합니다.");
      return false;
    }

    setPasswordError("");
    return true;
  };

  const onPasswordChange = (value: string) => {
    if (!validatePassword(value)) return;
    setPassword(value.slice(0, PASSWORD_LIMIT.MAX_LENGTH));
  };

  return { password, passwordError, onPasswordChange };
}
