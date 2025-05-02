import { useState } from "react";
import { PasswordType, SetValueFn } from "../../types/CardInformationType";
import { PASSWORD_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";

const usePassword = () => {
  const [password, setPasswordState] = useState<PasswordType>("");
  const setPassword: SetValueFn<PasswordType> = (value) => setPasswordState(value);
  const isPasswordComplete = useCheckLengthComplete(password, PASSWORD_MAX_LENGTH);

  return { password, setPassword, isPasswordComplete };
};

export default usePassword;
