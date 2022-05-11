import { createContext, useCallback, useState } from "react";

import { MAX_LENGTH } from "constants";
import useReady from "hooks/useReady";
import { isInValidSecurityCode } from "util/validator";

export const SecurityCodeContext = createContext();

const initialState = "";

const SecurityCodeProvider = ({ children }) => {
  const [securityCode, setSecurityCode] = useState(initialState);
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

  const resetSecurityCode = useCallback(() => {
    setSecurityCode(initialState);
  }, []);

  return (
    <SecurityCodeContext.Provider
      value={{
        state: { securityCode, securityCodeReady },
        action: {
          onChangeSecurityCode,
          onClickSecurityVirtualKeyboard,
          onClickSecurityBackspaceButton,
          resetSecurityCode,
          setSecurityCode,
        },
      }}
    >
      {children}
    </SecurityCodeContext.Provider>
  );
};

export default SecurityCodeProvider;
