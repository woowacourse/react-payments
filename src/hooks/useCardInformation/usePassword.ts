import { useState } from "react";
import { PasswordType } from "../../types/CardInformationType";
import { PASSWORD_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";

const usePassword = () => {
  const [password, setPassword] = useState<PasswordType>([""]);

  const isPasswordComplete = useCheckLengthComplete(password, PASSWORD_MAX_LENGTH);

  return { password, setPassword, isPasswordComplete };
};

export default usePassword;
