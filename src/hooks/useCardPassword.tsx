import { useState } from "react";

export default function useCardPassword() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (value: string) => {
    if (value.length > 2) {
      setPasswordError("비밀번호 앞 2자리만 입력해주세요.");
      return false;
    }

    if (!/^\d+$/.test(value)) {
      setPasswordError("숫자만 입력 가능합니다.");
      return false;
    }

    setPasswordError("");
    return true;
  };

  const onPasswordChange = (value: string) => {
    setPassword(value.slice(0, 2));
    validatePassword(value);
  };

  return { password, passwordError, onPasswordChange };
}
