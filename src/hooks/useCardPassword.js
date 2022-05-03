import { useRef, useState } from "react";
import { PASSWORD } from "../constant";

const useCardPassword = () => {
  const [password, setPassword] = useState({
    firstPassword: "",
    secondPassword: "",
  });
  const secondPasswordInputRef = useRef();

  const handleChangePassword = (key, { target: { value } }) => {
    if (value.length > PASSWORD.UNIT_LENGTH || isNaN(value)) return;

    if (value.length === PASSWORD.UNIT_LENGTH) {
      secondPasswordInputRef.current.focus();
    }

    setPassword({ ...password, [key]: value });
  };

  return { password, handleChangePassword, secondPasswordInputRef };
};

export default useCardPassword;
