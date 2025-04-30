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

  const onPasswordChange = (value: string) => {
    const errorMesssage = validatePassword(value);
    setPasswordError(errorMesssage);

    if (errorMesssage) return;
    setPassword(value.slice(0, PASSWORD_LIMIT.MAX_LENGTH));
  };

  return { password, passwordError, onPasswordChange };
}

const validatePassword = (value: string) => {
  if (!isUnderMaxLength(value.length, PASSWORD_LIMIT.MAX_LENGTH))
    return PASSWORD_ERROR_MESSAGE.INVALID_LENGTH_ERROR;

  if (!isNumber(value)) return PASSWORD_ERROR_MESSAGE.NOT_NUMBERIC_ERROR;

  return "";
};
