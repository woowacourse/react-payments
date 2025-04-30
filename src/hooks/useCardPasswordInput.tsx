import { useState } from "react";
import { isNumber, isUnderMaxLength } from "../validation/validate";
import { CARD_INPUT_LIMIT } from "../constants/CardInputLimit";

const PASSWORD_ERROR_MESSAGE = {
  INVALID_LENGTH_ERROR: `비밀번호 앞 ${CARD_INPUT_LIMIT.PASSWORD_MAX_LENGTH}자리만 입력해주세요.`,
  NOT_NUMBERIC_ERROR: "숫자만 입력 가능합니다.",
};

export default function useCardPasswordInput() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onPasswordChange = (value: string) => {
    const errorMesssage = validatePassword(value);
    setPasswordError(errorMesssage);

    if (errorMesssage) return;
    setPassword(value.slice(0, CARD_INPUT_LIMIT.PASSWORD_MAX_LENGTH));
  };

  return { password, passwordError, onPasswordChange };
}

const validatePassword = (value: string) => {
  if (!isUnderMaxLength(value.length, CARD_INPUT_LIMIT.PASSWORD_MAX_LENGTH))
    return PASSWORD_ERROR_MESSAGE.INVALID_LENGTH_ERROR;

  if (!isNumber(value)) return PASSWORD_ERROR_MESSAGE.NOT_NUMBERIC_ERROR;

  return "";
};
