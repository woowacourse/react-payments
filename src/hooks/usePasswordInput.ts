import { useState } from "react";
import { isNumeric } from "../utils/validators";

const initialState = {
  password: "",
  passwordError: "",
};

export function usePasswordInput() {
  const [password, setPassword] = useState(initialState.password);
  const [passwordError, setPasswordError] = useState(
    initialState.passwordError,
  );

  const resetPassword = () => {
    setPassword(initialState.password);
    setPasswordError(initialState.passwordError);
  };

  const handlePasswordChange = (value: string) => {
    const onlyNumbers = value.replace(/[^0-9]/g, "");
    const sliceValue = onlyNumbers.substring(0, 2);

    if (!isNumeric(value)) {
      setPasswordError("숫자를 입력해주세요.");
    } else {
      setPasswordError("");
    }

    setPassword(sliceValue);
  };

  const handleBlur = () => {
    if (password.length < 2) {
      setPasswordError("완전히 입력해 주세요.");
      return;
    }
  };

  return {
    password,
    passwordError,
    handlePasswordChange,
    handleBlur,
    resetPassword,
  };
}
