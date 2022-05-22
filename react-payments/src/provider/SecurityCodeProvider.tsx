import React, { createContext, useCallback, useState } from "react";

import { MAX_LENGTH } from "constants/index";
import useReady from "hooks/useReady";
import { isInValidSecurityCode } from "util/validator";
import { SecurityCodeType } from "types";

interface InitialContextState {
  securityCode: SecurityCodeType;
  securityCodeReady: boolean;
}

interface InitialContextValue {
  state: InitialContextState;
  action: {
    onChangeSecurityCode: ({ target }: { target: HTMLInputElement }) => void;
    onClickSecurityVirtualKeyboard: (value: string) => void;
    onClickSecurityBackspaceButton: () => void;
    resetSecurityCode: () => void;
    setSecurityCode: React.Dispatch<React.SetStateAction<string>>;
  };
}

export const SecurityCodeContext =
  createContext<InitialContextValue | null>(null);

const initialState = "";

const SecurityCodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [securityCode, setSecurityCode] =
    useState<SecurityCodeType>(initialState);
  const [securityCodeReady] = useReady(securityCode, isInValidSecurityCode);

  const onChangeSecurityCode = ({ target }: { target: HTMLInputElement }) => {
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
