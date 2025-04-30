import { useState } from "react";
import { isNumber, isUnderMaxLength } from "../validation/validate";

const PASSWORD_LIMIT = {
  MAX_LENGTH: 2,
} as const;

const PASSWORD_ERROR_MESSAGE = {
  INVALID_LENGTH_ERROR: `비밀번호 앞 ${PASSWORD_LIMIT.MAX_LENGTH}자리만 입력해주세요.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
};

export default function useCardPasswordInput() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (value: string) => {
    if (!isUnderMaxLength(value.length, PASSWORD_LIMIT.MAX_LENGTH)) {
      setPasswordError(PASSWORD_ERROR_MESSAGE.INVALID_LENGTH_ERROR);
      return false;
    }

    if (!isNumber(value)) {
      setPasswordError(PASSWORD_ERROR_MESSAGE.NOT_NUMBERIC_ERROR);
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
