import { useState } from "react";
import { PasswordType } from "../../types/CardInformationType";

const usePassword = () => {
  const [password, setPassword] = useState<PasswordType>([""]);

  return { password, setPassword };
};

export default usePassword;
