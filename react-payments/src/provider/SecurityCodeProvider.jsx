import { createContext, useState } from "react";
import { MAX_LENGTH } from "../constants";
import useReady from "../hooks/useReady";
import { isInValidSecurityCode } from "../util/validator";

export const SecurityCodeContext = createContext();

const SecurityCodeProvider = ({ children }) => {
  const [securityCode, setSecurityCode] = useState("");
  const [securityCodeReady] = useReady(securityCode, isInValidSecurityCode);

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

  return (
    <SecurityCodeContext.Provider
      value={{
        state: { securityCode, securityCodeReady },
        action: {
          onChangeSecurityCode,
          onClickSecurityVirtualKeyboard,
          onClickSecurityBackspaceButton,
        },
      }}
    >
      {children}
    </SecurityCodeContext.Provider>
  );
};

export default SecurityCodeProvider;
