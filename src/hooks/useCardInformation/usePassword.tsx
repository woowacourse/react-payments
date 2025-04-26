import { useState } from "react";
import { PasswordType } from "../../types/CardInformationType";
import useCheckLengthComplete from "../useCheckLengthComplete";
import { PASSWORD_MAX_LENGTH } from "../../constants/constant";

const usePassword = () => {
  const [password, setPassword] = useState<PasswordType>([""]);

  const isPasswordComplete = useCheckLengthComplete(password, PASSWORD_MAX_LENGTH);

  return { password, setPassword, isPasswordComplete };
};

export default usePassword;
