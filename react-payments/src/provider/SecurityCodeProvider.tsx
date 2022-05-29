import { createContext, useState } from "react";
import { MAX_LENGTH } from "../constants";
import useReady from "../hooks/useReady";
import { SecurityCode, SecurityCodeContextProvider, Target } from "../types";
import { isInValidSecurityCode } from "../util/validator";

const initialSecurityCode: SecurityCode = "";

export const SecurityCodeContext = createContext<SecurityCodeContextProvider>({
  state: { securityCode: initialSecurityCode, securityCodeReady: false },
  action: {
    onChangeSecurityCode: ({ target }) => null,
    onClickSecurityVirtualKeyboard: (value) => null,
    onClickSecurityBackspaceButton: () => null,
    resetSecurityCode: () => null,
  },
});

const SecurityCodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [securityCode, setSecurityCode] = useState(initialSecurityCode);
  const [securityCodeReady] = useReady(securityCode, isInValidSecurityCode);

  const onChangeSecurityCode = ({ target }: Target) => {
    setSecurityCode(target.value);
  };

  const onClickSecurityVirtualKeyboard = (value: string) => {
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

  const resetSecurityCode = () => {
    setSecurityCode(initialSecurityCode);
  };

  return (
    <SecurityCodeContext.Provider
      value={{
        state: { securityCode, securityCodeReady },
        action: {
          onChangeSecurityCode,
          onClickSecurityVirtualKeyboard,
          onClickSecurityBackspaceButton,
          resetSecurityCode,
        },
      }}
    >
      {children}
    </SecurityCodeContext.Provider>
  );
};

export default SecurityCodeProvider;
