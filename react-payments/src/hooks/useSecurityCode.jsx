import { useState } from "react";
import { MAX_LENGTH } from "../constants";

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState("");

  const onChangeSecurityCode = ({ target }) => {
    setSecurityCode(target.value);
  };

  const onClickSecurityVirtualKeyboard = (value) => {
    if (securityCode.length >= MAX_LENGTH.SECURITY_CODE) {
      return;
    }
    setSecurityCode((prev) => prev + value);
  };

  const onClickSecurityBackspaceButton = () => {
    if (securityCode.length === 0) {
      return;
    }

    setSecurityCode((prev) => prev.slice(0, -1));
  };

  return [
    securityCode,
    onClickSecurityVirtualKeyboard,
    onClickSecurityBackspaceButton,
    onChangeSecurityCode,
  ];
};

export default useSecurityCode;
