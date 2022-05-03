import { useRef, useState } from "react";
import { PASSWORD } from "../constant";

const useCardPassword = () => {
  const [password, setPassword] = useState({
    firstPassword: "",
    secondPassword: "",
  });
  const secondPasswordInputRef = useRef();

  const handleChangePassword = ({ target: { value, name } }) => {
    if (value.length > PASSWORD.UNIT_LENGTH || isNaN(value)) return;

    if (value.length === PASSWORD.UNIT_LENGTH) {
      secondPasswordInputRef.current.focus();
    }

    setPassword({ ...password, [name]: value });
  };

  return { password, handleChangePassword, secondPasswordInputRef };
};

export default useCardPassword;
