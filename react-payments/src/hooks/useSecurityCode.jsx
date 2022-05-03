import { useEffect, useState } from "react";
import { MAX_LENGTH } from "../constants";
import { isInValidSecurityCode } from "../util/validator";

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState("");
  const [securityCodeReady, setSecurityCodeReady] = useState(false);

  useEffect(() => {
    if (isInValidSecurityCode(securityCode) === securityCodeReady) {
      setSecurityCodeReady((prev) => !prev);
    }
  }, [securityCode, securityCodeReady]);

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

  return {
    securityCode,
    onClickSecurityVirtualKeyboard,
    onClickSecurityBackspaceButton,
    onChangeSecurityCode,
    securityCodeReady,
  };
};

export default useSecurityCode;
