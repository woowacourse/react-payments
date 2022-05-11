import { useRef, useState } from "react";
import { isFilledPasswordLength, isOverPasswordLength } from "validation";

const useCardPassword = (initialValue) => {
  const [password, setPassword] = useState(initialValue);
  const secondPasswordInputRef = useRef();

  const handleChangePassword = ({ target: { value, name } }) => {
    if (isOverPasswordLength(value) || isNaN(value)) return;

    if (isFilledPasswordLength(value)) {
      secondPasswordInputRef.current.focus();
    }

    setPassword({ ...password, [name]: value });
  };

  return {
    password,
    handleChangePassword,
    secondPasswordInputRef,
  };
};

export default useCardPassword;
